import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Contact from '@/models/Contact'
import { sendContactNotification, sendAutoReply } from '@/lib/email-resend'

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Connect to MongoDB
    await connectDB()

    // Save to database
    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    })

    // Send response immediately
    const response = NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
        data: {
          id: contact._id,
          createdAt: contact.createdAt,
        },
      },
      { status: 201 }
    )

    // Send email notifications in background (don't wait)
    setImmediate(() => {
      Promise.all([
        sendContactNotification({ name, email, phone, subject, message }),
        sendAutoReply({ name, email, phone, subject, message }),
      ]).catch((error) => {
        console.error('Email notification error:', error)
      })
    })

    return response
  } catch (error: any) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      {
        error: 'Failed to submit contact form',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve contacts (for admin use)
export async function GET(request: NextRequest) {
  try {
    // Simple authentication check (you should implement proper auth)
    const authHeader = request.headers.get('authorization')
    const apiKey = process.env.ADMIN_API_KEY

    if (!apiKey || authHeader !== `Bearer ${apiKey}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    await connectDB()

    // Get query parameters
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '50')
    const skip = parseInt(searchParams.get('skip') || '0')
    const unreadOnly = searchParams.get('unread') === 'true'

    // Build query
    const query = unreadOnly ? { read: false } : {}

    // Fetch contacts
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .lean()

    const total = await Contact.countDocuments(query)

    return NextResponse.json({
      success: true,
      data: contacts,
      pagination: {
        total,
        limit,
        skip,
        hasMore: skip + limit < total,
      },
    })
  } catch (error: any) {
    console.error('Get contacts error:', error)
    
    return NextResponse.json(
      {
        error: 'Failed to retrieve contacts',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 }
    )
  }
}
