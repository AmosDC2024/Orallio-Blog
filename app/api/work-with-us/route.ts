import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail/smtp';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, proposal, website } = body;

    // Honeypot check for spam protection
    if (website && website.trim() !== '') {
      return NextResponse.json({ success: true, message: 'Proposal received.' }, { status: 200 });
    }

    // Validation
    if (!name || !name.trim()) {
      return NextResponse.json({ success: false, error: 'Your name/title is required.' }, { status: 400 });
    }
    if (!company || !company.trim()) {
      return NextResponse.json({ success: false, error: 'Organization/Company name is required.' }, { status: 400 });
    }
    if (!email || !email.trim()) {
      return NextResponse.json({ success: false, error: 'Business email is required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ success: false, error: 'Invalid business email format.' }, { status: 400 });
    }

    if (!proposal || !proposal.trim()) {
      return NextResponse.json({ success: false, error: 'Overview of proposed collaboration is required.' }, { status: 400 });
    }

    // Determine receiver mailbox dynamically
    const receiverEmail =
      process.env.WORK_WITH_US_RECEIVER_EMAIL ||
      process.env.SMTP_USER ||
      'godwin@orallio.com';

    const plainText = `
New Orallio Partnership Proposal

Name / Title: ${name}
Organization: ${company}
Business Email: ${email}
Phone / WhatsApp: ${phone || 'Not provided'}
Date: ${new Date().toLocaleString()}

Proposed Collaboration Overview:
${proposal}
    `.trim();

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0B1120; color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="margin: 0; color: #38BDF8; font-size: 20px;">Orallio Group Partnership Proposal</h2>
        </div>
        <div style="padding: 24px; background-color: #ffffff; color: #334155;">
          <p style="font-size: 14px; margin-bottom: 20px;">A new partnership proposal has been submitted via the Work With Us portal:</p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #f1f5f9; width: 150px;">Name / Title:</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Organization:</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9;"><strong>${company}</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Business Email:</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #2563EB;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Phone / WhatsApp:</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Submission Date:</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #2563EB; border-radius: 4px;">
            <p style="margin: 0 0 8px 0; font-weight: bold; font-size: 13px; color: #64748b; text-transform: uppercase;">Proposal Scope & Overview:</p>
            <p style="margin: 0; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">${proposal}</p>
          </div>
        </div>
        <div style="background-color: #f1f5f9; padding: 12px 20px; font-size: 12px; color: #64748b; text-align: center;">
          Orallio Group Partnership System • Recipient: ${receiverEmail}
        </div>
      </div>
    `.trim();

    await sendMail({
      to: receiverEmail,
      subject: `[Orallio Partnership Proposal] ${name} (${company})`,
      text: plainText,
      html: htmlContent,
      replyTo: email.trim(),
    });

    return NextResponse.json({
      success: true,
      message: 'Your partnership proposal has been submitted successfully.',
    });
  } catch (error: any) {
    console.error('Error in /api/work-with-us route:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process proposal. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
