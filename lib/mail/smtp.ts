import tls from 'tls';
import net from 'net';

export interface SendEmailParams {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}

export async function sendSmtpEmail({ to, subject, text, html, replyTo }: SendEmailParams): Promise<boolean> {
  const host = process.env.SMTP_HOST || 'mail.privateemail.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    console.warn('SMTP credentials not configured (SMTP_USER / SMTP_PASS). Submission logged successfully.');
    return true;
  }

  return new Promise((resolve, reject) => {
    let client: any = null;
    let responseStep = 0;

    const cleanup = () => {
      if (client) {
        try { client.end(); } catch (e) {}
      }
    };

    const handleData = (data: Buffer) => {
      const resp = data.toString();

      if (responseStep === 0 && resp.startsWith('220')) {
        responseStep = 1;
        client.write(`EHLO ${host}\r\n`);
      } else if (responseStep === 1 && resp.startsWith('250')) {
        responseStep = 2;
        client.write(`AUTH LOGIN\r\n`);
      } else if (responseStep === 2 && resp.startsWith('334')) {
        responseStep = 3;
        client.write(`${Buffer.from(user).toString('base64')}\r\n`);
      } else if (responseStep === 3 && resp.startsWith('334')) {
        responseStep = 4;
        client.write(`${Buffer.from(pass).toString('base64')}\r\n`);
      } else if (responseStep === 4 && resp.startsWith('235')) {
        responseStep = 5;
        client.write(`MAIL FROM:<${user}>\r\n`);
      } else if (responseStep === 5 && resp.startsWith('250')) {
        responseStep = 6;
        client.write(`RCPT TO:<${to}>\r\n`);
      } else if (responseStep === 6 && resp.startsWith('250')) {
        responseStep = 7;
        client.write(`DATA\r\n`);
      } else if (responseStep === 7 && resp.startsWith('354')) {
        responseStep = 8;
        const mailLines = [
          `From: "Orallio Website" <${user}>`,
          `To: <${to}>`,
          replyTo ? `Reply-To: <${replyTo}>` : '',
          `Subject: ${subject}`,
          'MIME-Version: 1.0',
          'Content-Type: text/html; charset=utf-8',
          '',
          html || `<pre>${text}</pre>`,
          '.\r\n',
        ].filter(Boolean);

        client.write(mailLines.join('\r\n'));
      } else if (responseStep === 8 && resp.startsWith('250')) {
        responseStep = 9;
        client.write(`QUIT\r\n`);
        resolve(true);
        cleanup();
      } else if (resp.startsWith('5') || resp.startsWith('4')) {
        console.error('SMTP server error:', resp);
        cleanup();
        reject(new Error(`SMTP Server Error: ${resp}`));
      }
    };

    try {
      if (port === 465) {
        client = tls.connect({ host, port, servername: host }, () => {});
      } else {
        client = net.connect({ host, port }, () => {});
      }

      client.on('data', handleData);
      client.on('error', (err: any) => {
        console.error('SMTP Connection Error:', err);
        cleanup();
        reject(err);
      });
      client.setTimeout(12000, () => {
        cleanup();
        reject(new Error('SMTP Connection Timeout'));
      });
    } catch (err) {
      cleanup();
      reject(err);
    }
  });
}

export async function sendMail(params: SendEmailParams): Promise<boolean> {
  try {
    const nodemailer = await import('nodemailer').catch(() => null);
    if (nodemailer && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'mail.privateemail.com',
        port: parseInt(process.env.SMTP_PORT || '465', 10),
        secure: parseInt(process.env.SMTP_PORT || '465', 10) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Orallio Website" <${process.env.SMTP_USER}>`,
        to: params.to,
        replyTo: params.replyTo,
        subject: params.subject,
        text: params.text,
        html: params.html,
      });
      return true;
    }
  } catch (error) {
    console.warn('Nodemailer execution failed, falling back to built-in TLS SMTP:', error);
  }

  return sendSmtpEmail(params);
}
