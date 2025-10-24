import DonationForm from '@/components/forms/DonationForm'
import { organizationData } from '@/data/organization'
import { DollarSign, Heart, Users, BookOpen, Calendar, Shield } from 'lucide-react'

export default function DonatePage() {
  const { budget } = organizationData

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-gold to-accent-gold-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Your generous donation helps us empower youth and support new converts 
              through education, mentorship, and community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Your Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every donation makes a real difference in the lives of youth and new converts in our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-primary-50 rounded-xl">
              <DollarSign className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-700 mb-2">$25/month</h3>
              <p className="text-gray-600">Sponsors a student's complete education and mentorship</p>
            </div>
            
            <div className="text-center p-6 bg-accent-gold/10 rounded-xl">
              <BookOpen className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-700 mb-2">$50</h3>
              <p className="text-gray-600">Provides educational materials and books for 5 students</p>
            </div>
            
            <div className="text-center p-6 bg-secondary-blue/10 rounded-xl">
              <Users className="w-12 h-12 text-secondary-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-700 mb-2">$100</h3>
              <p className="text-gray-600">Funds a complete mentorship training program</p>
            </div>
            
            <div className="text-center p-6 bg-secondary-teal/10 rounded-xl">
              <Calendar className="w-12 h-12 text-secondary-teal mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-700 mb-2">$250</h3>
              <p className="text-gray-600">Supports a full community event or retreat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              How Your Donations Are Used
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete transparency in how we allocate funds to maximize impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {budget.items.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-primary-700">
                      {item.category}
                    </h3>
                    <span className="text-2xl font-bold text-accent-gold">
                      ${item.amount}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-500 h-2 rounded-full"
                      style={{ width: `${(item.amount / budget.total) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {((item.amount / budget.total) * 100).toFixed(1)}% of total budget
                  </p>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">
                Total Year 1 Budget
              </h3>
              <div className="text-6xl font-bold text-accent-gold mb-4">
                ${budget.total.toLocaleString()}
              </div>
              <p className="text-gray-600 mb-6">
                This budget covers all our programs and operations for the first year, 
                helping us reach our goal of supporting 35+ youth and converts.
              </p>
              <div className="bg-primary-50 rounded-lg p-4">
                <p className="text-sm text-primary-700 font-medium">
                  100% of donations go directly to programs and community service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Make a Donation
            </h2>
            <p className="text-lg text-gray-600">
              Choose your donation amount and type. All major payment methods accepted.
            </p>
          </div>
          
          <DonationForm />

          {/* Alternative Payment Methods */}
          <div className="mt-12 p-6 bg-primary-50 rounded-xl">
            <h3 className="text-xl font-bold text-primary-700 mb-4 text-center">
              Need Help or Alternative Payment Method?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-primary-600 mb-3">📞 Contact Us Directly</h4>
                <p className="text-gray-700 mb-2">
                  For assistance with donations or alternative payment methods:
                </p>
                <a 
                  href="tel:+233542524571" 
                  className="text-accent-gold hover:text-accent-gold-dark font-bold text-lg block mb-1"
                >
                  0542524571
                </a>
                <a 
                  href="https://wa.me/233542524571" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-medium text-sm block mb-2"
                >
                  💬 Chat on WhatsApp
                </a>
                <a 
                  href="mailto:striveghana1@gmail.com" 
                  className="text-primary-500 hover:text-primary-600 text-sm"
                >
                  striveghana1@gmail.com
                </a>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-primary-600 mb-3">💳 Secure Payments via Paystack</h4>
                <p className="text-gray-700 mb-2">
                  We accept international cards (Visa, Mastercard, Amex) and Ghana Mobile Money (MTN, Vodafone, AirtelTigo).
                </p>
                <p className="text-sm text-gray-600">
                  All transactions are secure and encrypted via Paystack. Amounts shown in USD, processed in GHS.
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                🇬🇭 <strong>Ghana Mobile Money:</strong> MTN, Vodafone, AirtelTigo accepted
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zakat & Sadaqat Information */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Islamic Donations Welcome
            </h2>
            <p className="text-lg text-gray-600">
              We accept Zakat and Sadaqat in accordance with Islamic principles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">Zakat</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your Zakat donations are used specifically for eligible recipients according to Islamic law, 
                including supporting new converts, those in need, and community development programs.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Support for new Muslim converts</li>
                <li>• Educational assistance for those in need</li>
                <li>• Emergency support fund</li>
                <li>• Community development projects</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">Sadaqat</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sadaqat donations support all our programs and activities, helping us expand our reach 
                and impact in the community while earning continuous reward (Sadaqah Jariyah).
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Youth empowerment programs</li>
                <li>• Islamic education initiatives</li>
                <li>• Mentorship and counseling services</li>
                <li>• Community events and activities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-primary-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-primary-700 mb-4">
            Secure & Transparent
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Your donations are processed securely and used transparently for maximum impact
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-primary-700 mb-2">Secure Payments</h3>
              <p className="text-sm text-gray-600">SSL encrypted transactions with trusted payment processors</p>
            </div>
            
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-primary-700 mb-2">100% to Programs</h3>
              <p className="text-sm text-gray-600">All donations go directly to community service and programs</p>
            </div>
            
            <div className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-primary-700 mb-2">Full Transparency</h3>
              <p className="text-sm text-gray-600">Regular updates on how your donations create impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Other Ways to Support
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Financial donations are just one way to help. Consider these other options:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-xl p-6">
              <Users className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Volunteer Your Time</h3>
              <p className="text-gray-200 mb-4">
                Share your skills and expertise to help our programs succeed
              </p>
              <a href="/get-involved" className="text-accent-gold hover:text-accent-gold-light font-semibold">
                Learn More →
              </a>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6">
              <Heart className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Spread the Word</h3>
              <p className="text-gray-200 mb-4">
                Help us reach more people who could benefit from our programs
              </p>
              <a href="/contact" className="text-accent-gold hover:text-accent-gold-light font-semibold">
                Contact Us →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}