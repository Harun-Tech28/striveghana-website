import nodemailer from 'nodemailer'

// Create reusable transporter
const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

interface ContactEmailData {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

export async function sendContactNotification(data: ContactEmailData) {
  const { name, email, phone, subject, message } = data

  const mailOptions = {
    from: `"StriveGhana Website" <${process.env.EMAIL_USER}>`,
    to: process.env.NOTIFICATION_EMAIL || 'striveghana@gmail.com',
    subject: `New Contact Form Submission${subject ? `: ${subject}` : ''}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #1e3a8a; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 4px; border: 1px solid #e5e7eb; }
            .message-box { background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #3b82f6; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">📧 New Contact Form Submission</h1>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">StriveGhana Website</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="label">📱 Phone:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ` : ''}
              
              ${subject ? `
              <div class="field">
                <div class="label">📋 Subject:</div>
                <div class="value">${subject}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
                <p style="margin: 0; color: #6b7280; font-size: 14px;">
                  <strong>Received:</strong> ${new Date().toLocaleString('en-US', { 
                    dateStyle: 'full', 
                    timeStyle: 'short',
                    timeZone: 'Africa/Accra'
                  })}
                </p>
              </div>
            </div>
            
            <div class="footer">
              <p>This is an automated notification from your StriveGhana website contact form.</p>
              <p>Reply directly to <a href="mailto:${email}">${email}</a> to respond to this inquiry.</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
New Contact Form Submission - StriveGhana

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${subject ? `Subject: ${subject}` : ''}

Message:
${message}

Received: ${new Date().toLocaleString()}
    `,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Email error:', error)
    throw error
  }
}

// Auto-reply to the person who submitted the form
export async function sendAutoReply(data: ContactEmailData) {
  const { name, email } = data

  const mailOptions = {
    from: `"StriveGhana" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Thank you for contacting StriveGhana - السعي',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
            .arabic { font-size: 24px; color: #d97706; margin: 10px 0; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; background: #f3f4f6; border-radius: 0 0 8px 8px; }
            .contact-info { background: white; padding: 15px; border-radius: 4px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">StriveGhana</h1>
              <div class="arabic">السعي</div>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Supporting Youth & New Converts</p>
            </div>
            
            <div class="content">
              <h2 style="color: #1e3a8a;">As-salamu alaykum, ${name}!</h2>
              
              <p>Thank you for reaching out to StriveGhana. We have received your message and truly appreciate you taking the time to contact us.</p>
              
              <p>Our team will review your inquiry and get back to you as soon as possible, typically within 24-48 hours.</p>
              
              <div class="contact-info">
                <h3 style="margin-top: 0; color: #1e3a8a;">Contact Information:</h3>
                <p style="margin: 5px 0;">📧 Email: striveghana@gmail.com</p>
                <p style="margin: 5px 0;">📱 Phone: 0542524571</p>
                <p style="margin: 5px 0;">💬 WhatsApp: <a href="https://wa.me/233542524571">Chat with us</a></p>
                <p style="margin: 5px 0;">🌐 Website: striveghana.org</p>
              </div>
              
              <p><strong>Our Mission:</strong> To support and empower youth and new converts by fostering faith, unity, and personal growth through education, mentorship, and community engagement.</p>
              
              <p style="margin-top: 20px;">May Allah bless you and guide you always.</p>
              
              <p style="margin-top: 30px; font-style: italic; color: #6b7280;">
                "And strive for Allah with the striving due to Him. He has chosen you." - Quran 22:78
              </p>
            </div>
            
            <div class="footer">
              <p><strong>StriveGhana - السعي</strong></p>
              <p>99 BLK IX Ejisuman Near Family Hospital, Ejisu, Ashanti</p>
              <p>P O Box 222 Ejisu Ashanti</p>
            </div>
          </div>
        </body>
      </html>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Auto-reply sent to:', email)
  } catch (error) {
    console.error('Auto-reply error:', error)
    // Don't throw error for auto-reply failures
  }
}
