import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const RECIPIENT_EMAIL = process.env.RECEIVER_EMAIL || 'navnathbandgar7481@gmail.com';

/**
 * Creates and returns the nodemailer transporter
 */
export function getTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  // Custom SMTP
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  // Gmail SMTP
  if (user && pass) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass }
    });
  }

  return null;
}

/**
 * Send Contact Form Email
 */
export async function sendContactEmail(data) {
  const transporter = getTransporter();

  const formattedDate = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  // Resolve logo file (prefer white logo for dark navy header)
  const logoWhitePath = path.resolve(process.cwd(), 'public', 'AayamLogoWhite.png');
  const logoV1Path = path.resolve(process.cwd(), 'public', 'AayamLogoV1.png');
  const logoPath = fs.existsSync(logoWhitePath) ? logoWhitePath : (fs.existsSync(logoV1Path) ? logoV1Path : null);

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .header { background: #0A192F; padding: 22px 24px; border-bottom: 3px solid #F15A24; }
        .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; line-height: 1.2; }
        .header p { color: #F15A24; margin: 4px 0 0 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
        .content { padding: 28px 24px; }
        .field { margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
        .field:last-child { border-bottom: none; }
        .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; font-weight: 700; margin-bottom: 4px; }
        .value { font-size: 15px; color: #0f172a; font-weight: 500; }
        .message-box { background: #fff8f5; border-left: 4px solid #F15A24; padding: 14px 16px; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #334155; }
        .footer { background: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
        .badge { display: inline-block; padding: 4px 10px; background: #e0f2fe; color: #0369a1; border-radius: 9999px; font-size: 12px; font-weight: 600; }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header with Title on Left and Logo on Top Right -->
        <div class="header">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td align="left" valign="middle" style="text-align: left; vertical-align: middle;">
                <h1>AAYAM Platform</h1>
                <p>New Contact Enquiry Received</p>
              </td>
              <td align="right" valign="middle" style="text-align: right; vertical-align: middle; padding-left: 16px;">
                ${logoPath ? `
                  <img src="cid:aayamlogo" alt="AAYAM Logo" style="height: 38px; max-height: 42px; width: auto; max-width: 140px; display: inline-block; vertical-align: middle;" />
                ` : `
                  <span style="color: #ffffff; font-weight: 800; font-size: 18px; letter-spacing: 1px;">AAYAM</span>
                `}
              </td>
            </tr>
          </table>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Date & Time</div>
            <div class="value">${formattedDate} (IST)</div>
          </div>
          <div class="field">
            <div class="label">Full Name</div>
            <div class="value" style="font-size: 17px; font-weight: 700; color: #F15A24;">${data.name || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Email Address</div>
            <div class="value"><a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email || 'Not provided'}</a></div>
          </div>
          <div class="field">
            <div class="label">Organisation</div>
            <div class="value">${data.organization || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Role</div>
            <div class="value"><span class="badge">${data.role || 'Not specified'}</span></div>
          </div>
          ${data.enquiryType ? `
          <div class="field">
            <div class="label">Enquiry Type</div>
            <div class="value">${data.enquiryType}</div>
          </div>
          ` : ''}
          ${data.location ? `
          <div class="field">
            <div class="label">Project Location</div>
            <div class="value">${data.location}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Project Requirements & Message</div>
            <div class="message-box">${(data.message || 'No message provided').replace(/\n/g, '<br/>')}</div>
          </div>
        </div>
        <div class="footer">
          This enquiry was submitted via the official AAYAM Website contact form.
          <br/>Reply directly to this email to contact <strong>${data.name}</strong>.
        </div>
      </div>
    </body>
    </html>
  `;

  if (transporter) {
    const mailOptions = {
      from: `"AAYAM Website" <${process.env.EMAIL_USER || 'no-reply@aayam.msquaresoftware.com'}>`,
      to: RECIPIENT_EMAIL,
      replyTo: data.email,
      subject: `New AAYAM Enquiry from ${data.name} (${data.organization || 'Individual'})`,
      text: `New Enquiry:\n\nName: ${data.name}\nEmail: ${data.email}\nOrg: ${data.organization}\nRole: ${data.role}\nMessage: ${data.message}`,
      html: htmlContent,
      attachments: logoPath ? [
        {
          filename: 'aayam-logo.png',
          path: logoPath,
          cid: 'aayamlogo'
        }
      ] : []
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`[nodemailer] Email sent to ${RECIPIENT_EMAIL}:`, info.messageId);
    return { success: true, messageId: info.messageId, recipient: RECIPIENT_EMAIL };
  } else {
    // If no SMTP credentials configured, safely log to console and local file
    const logPath = path.resolve(process.cwd(), 'contact-submissions.log');
    const logEntry = `\n--- [${formattedDate}] New Contact Enquiry ---\nName: ${data.name}\nEmail: ${data.email}\nOrg: ${data.organization}\nRole: ${data.role}\nEnquiryType: ${data.enquiryType || ''}\nLocation: ${data.location || ''}\nMessage: ${data.message}\nRecipient: ${RECIPIENT_EMAIL}\n---------------------------------------------\n`;
    fs.appendFileSync(logPath, logEntry, 'utf8');

    console.log(`\n======================================================`);
    console.log(`[AAYAM CONTACT ENQUIRY RECORDED]`);
    console.log(`Recipient: ${RECIPIENT_EMAIL}`);
    console.log(`From: ${data.name} <${data.email}>`);
    console.log(`Org: ${data.organization} (${data.role})`);
    console.log(`Message: ${data.message}`);
    console.log(`NOTE: To send live emails to ${RECIPIENT_EMAIL}, please add your EMAIL_USER and EMAIL_PASS (Gmail App Password) in the .env file.`);
    console.log(`======================================================\n`);

    return {
      success: true,
      logged: true,
      recipient: RECIPIENT_EMAIL,
      note: 'Submission saved to contact-submissions.log. Configure .env with Gmail App Password to send real SMTP emails.'
    };
  }
}
