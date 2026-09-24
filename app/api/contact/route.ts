import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail/smtp';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, subject, message, website } = body;

    // Honeypot check for spam protection
    if (website && website.trim() !== '') {
      // Quietly succeed to fool spam bots
      return NextResponse.json({ success: true, message: 'Inquiry received.' }, { status: 200 });
    }

    // Validation
    if (!fullName || !fullName.trim()) {
      return NextResponse.json({ success: false, error: 'Full name is required.' }, { status: 400 });
    }
    if (!email || !email.trim()) {
      return NextResponse.json({ success: false, error: 'Email address is required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ success: false, error: 'Invalid email address format.' }, { status: 400 });
    }

    if (!subject || !subject.trim()) {
      return NextResponse.json({ success: false, error: 'Subject is required.' }, { status: 400 });
    }
    if (!message || !message.trim()) {
      return NextResponse.json({ success: false, error: 'Message details are required.' }, { status: 400 });
    }

    // Determine receiver mailbox dynamically
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL ||
      process.env.SMTP_USER ||
      'godwin@orallio.com';

    const plainText = `
New Orallio Contact Submission

Full Name: ${fullName}
Email: ${email}
Subject: ${subject}
Date: ${new Date().toLocaleString()}

Message:
${message}
    `.trim();

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0B1120; color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="margin: 0; color: #38BDF8; font-size: 20px;">Orallio Group Contact Submission</h2>
        </div>
        <div style="padding: 24px; background-color: #ffffff; color: #334155;">
          <p style="font-size: 14px; margin-bottom: 20px;">A new website inquiry has been received through the contact portal:</p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #f1f5f9; width: 140px;">Full Name:</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Email Address:</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #2563EB;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Subject:</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Submission Date:</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #2563EB; border-radius: 4px;">
            <p style="margin: 0 0 8px 0; font-weight: bold; font-size: 13px; color: #64748b; text-transform: uppercase;">Message Content:</p>
            <p style="margin: 0; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
        </div>
        <div style="background-color: #f1f5f9; padding: 12px 20px; font-size: 12px; color: #64748b; text-align: center;">
          Orallio Group Web Governance System • Recipient: ${receiverEmail}
        </div>
      </div>
    `.trim();

    await sendMail({
      to: receiverEmail,
      subject: `[Orallio Website Contact] ${subject}`,
      text: plainText,
      html: htmlContent,
      replyTo: email.trim(),
    });

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been submitted successfully.',
    });
  } catch (error: any) {
    console.error('Error in /api/contact route:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process inquiry. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
