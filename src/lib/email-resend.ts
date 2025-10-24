import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactEmailData {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

export async function sendContactNotification(data: ContactEmailData) {
  const { name, email, phone, subject, message } = data

  try {
    // Add timeout to prevent hanging
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Email timeout')), 10000)
    )

    const result = await Promise.race([
      resend.emails.send({
      from: 'StriveGhana <onboarding@resend.dev>', // Resend's test email
      to: process.env.NOTIFICATION_EMAIL || 'striveghana1@gmail.com',
      subject: `New Contact Form: ${subject || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0;">📧 New Contact Form Submission</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">StriveGhana Website</p>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb;">
            <div style="margin-bottom: 20px;">
              <strong style="color: #1e3a8a;">👤 Name:</strong>
              <div style="background: white; padding: 10px; border-radius: 4px; margin-top: 5px;">${name}</div>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #1e3a8a;">📧 Email:</strong>
              <div style="background: white; padding: 10px; border-radius: 4px; margin-top: 5px;">
                <a href="mailto:${email}">${email}</a>
              </div>
            </div>
            
            ${phone ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #1e3a8a;">📱 Phone:</strong>
              <div style="background: white; padding: 10px; border-radius: 4px; margin-top: 5px;">
                <a href="tel:${phone}">${phone}</a>
              </div>
            </div>
            ` : ''}
            
            ${subject ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #1e3a8a;">📋 Subject:</strong>
              <div style="background: white; padding: 10px; border-radius: 4px; margin-top: 5px;">${subject}</div>
            </div>
            ` : ''}
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #1e3a8a;">💬 Message:</strong>
              <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #3b82f6; margin-top: 5px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
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
          
          <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
            <p>Reply directly to <a href="mailto:${email}">${email}</a> to respond.</p>
          </div>
        </div>
      `,
      }),
      timeoutPromise
    ]) as any

    console.log('Email sent via Resend:', result)
    return { success: true, messageId: result.data?.id }
  } catch (error) {
    console.error('Resend email error:', error)
    throw error
  }
}

export async function sendAutoReply(data: ContactEmailData) {
  const { name, email } = data

  try {
    // Add timeout to prevent hanging
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Email timeout')), 10000)
    )

    await Promise.race([
      resend.emails.send({
      from: 'StriveGhana <onboarding@resend.dev>',
      to: email,
      subject: 'Thank you for contacting StriveGhana - السعي',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0;">StriveGhana</h1>
            <div style="font-size: 24px; color: #d97706; margin: 10px 0;">السعي</div>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Supporting Youth & New Converts</p>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb;">
            <h2 style="color: #1e3a8a;">As-salamu alaykum, ${name}!</h2>
            
            <p>Thank you for reaching out to StriveGhana. We have received your message and truly appreciate you taking the time to contact us.</p>
            
            <p>Our team will review your inquiry and get back to you as soon as possible, typically within 24-48 hours.</p>
            
            <div style="background: white; padding: 15px; border-radius: 4px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #1e3a8a;">Contact Information:</h3>
              <p style="margin: 5px 0;">📧 Email: striveghana1@gmail.com</p>
              <p style="margin: 5px 0;">📱 Phone: 0542524571</p>
              <p style="margin: 5px 0;">💬 WhatsApp: <a href="https://wa.me/233542524571">Chat with us</a></p>
            </div>
            
            <p style="margin-top: 30px; font-style: italic; color: #6b7280;">
              "And strive for Allah with the striving due to Him. He has chosen you." - Quran 22:78
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 14px; background: #f3f4f6; border-radius: 0 0 8px 8px;">
            <p><strong>StriveGhana - السعي</strong></p>
            <p>99 BLK IX Ejisuman, Ejisu, Ashanti</p>
          </div>
        </div>
      `,
      }),
      timeoutPromise
    ])

    console.log('Auto-reply sent via Resend')
  } catch (error) {
    console.error('Auto-reply error:', error)
  }
}
