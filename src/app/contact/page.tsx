import ContactForm from '@/components/forms/ContactForm'
import { organizationData } from '@/data/organization'
import { Mail, MapPin, Phone, Clock, Users, Heart } from 'lucide-react'

export default function ContactPage() {
  const { contact } = organizationData

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Mail className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We'd love to hear from you. Whether you're interested in our programs, 
              want to volunteer, or have questions, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary-700 mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-700 mb-1">Email</h3>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-gray-600 hover:text-primary-500 transition-colors"
                    >
                      {contact.email}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent-gold-dark" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-700 mb-1">Address</h3>
                    <div className="text-gray-600">
                      <p>{contact.address.poBox}</p>
                      <p>{contact.address.street}</p>
                      <p>{contact.address.city}, {contact.address.region}</p>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-secondary-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-700 mb-1">Website</h3>
                    <p className="text-gray-600">{contact.website}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Visit us online for updates and resources
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-teal/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-700 mb-1">Office Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-12 p-6 bg-primary-50 rounded-xl">
                <h3 className="text-xl font-bold text-primary-700 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <a
                    href="/get-involved"
                    className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Learn about volunteer opportunities
                  </a>
                  <a
                    href="/donate"
                    className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Make a donation
                  </a>
                  <a
                    href="/programs"
                    className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    View our programs
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Ways to Get Involved
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              There are many ways to support our mission and be part of the Strive community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Share your skills and time to help our programs succeed
              </p>
              <p className="text-sm text-primary-600 font-medium">
                Contact us to learn more
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent-gold-dark" />
              </div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Mentor</h3>
              <p className="text-gray-600 mb-4">
                Guide and support new Muslims on their journey
              </p>
              <p className="text-sm text-primary-600 font-medium">
                Mentorship training provided
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary-blue" />
              </div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Partner</h3>
              <p className="text-gray-600 mb-4">
                Collaborate with us as an organization or mosque
              </p>
              <p className="text-sm text-primary-600 font-medium">
                Building community together
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-secondary-teal" />
              </div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Spread the Word</h3>
              <p className="text-gray-600 mb-4">
                Help us reach more people who need our support
              </p>
              <p className="text-sm text-primary-600 font-medium">
                Share our mission
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our programs and how to get involved
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-700 mb-3">
                How can I join your programs?
              </h3>
              <p className="text-gray-700">
                Simply contact us through the form above or email us directly. We'll discuss which 
                programs best fit your needs and interests, and guide you through the enrollment process.
              </p>
            </div>
            
            <div className="bg-accent-gold/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-700 mb-3">
                Do I need prior Islamic knowledge to participate?
              </h3>
              <p className="text-gray-700">
                Not at all! Our programs are designed for all levels, from complete beginners to those 
                with more experience. We provide appropriate support and education for everyone.
              </p>
            </div>
            
            <div className="bg-secondary-blue/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-700 mb-3">
                How can I become a volunteer or mentor?
              </h3>
              <p className="text-gray-700">
                We welcome volunteers and mentors! Contact us to discuss your interests and availability. 
                We provide training and support to ensure you're well-prepared for your role.
              </p>
            </div>
            
            <div className="bg-secondary-teal/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-700 mb-3">
                Are your programs free?
              </h3>
              <p className="text-gray-700">
                Yes, all our programs are provided free of charge. We're supported by donations and 
                volunteers who believe in our mission to serve the community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}