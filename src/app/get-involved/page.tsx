import Link from 'next/link'
import { Users, Heart, BookOpen, UserPlus, Star, ArrowRight } from 'lucide-react'

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Get Involved
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Join our community and make a difference in the lives of youth and new converts. 
              There are many ways to contribute to our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Ways to Make a Difference
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you have time, skills, or resources to share, there's a place for you in our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Volunteer */}
            <div className="bg-primary-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-700">Volunteer</h3>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Share your skills, time, and passion to help our programs succeed. We need volunteers 
                for various activities including event organization, administrative support, and program assistance.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-primary-600 mb-3">Volunteer Opportunities:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-gold mr-2 mt-1 flex-shrink-0" />
                    Event planning and coordination
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-gold mr-2 mt-1 flex-shrink-0" />
                    Administrative and office support
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-gold mr-2 mt-1 flex-shrink-0" />
                    Social media and communications
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-gold mr-2 mt-1 flex-shrink-0" />
                    Program assistance and support
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-gold mr-2 mt-1 flex-shrink-0" />
                    Fundraising and outreach
                  </li>
                </ul>
              </div>
              
              <Link
                href="/contact"
                className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Become a Volunteer
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            {/* Mentor */}
            <div className="bg-accent-gold/10 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-700">Become a Mentor</h3>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Guide and support new Muslims and youth on their spiritual journey. As a mentor, 
                you'll provide one-on-one guidance, emotional support, and help with Islamic learning.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-primary-600 mb-3">Mentor Responsibilities:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-gold mr-2 mt-1 flex-shrink-0" />
                    One-on-one guidance and support
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-gold mr-2 mt-1 flex-shrink-0" />
                    Islamic education and learning support
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-gold mr-2 mt-1 flex-shrink-0" />
                    Emotional and spiritual counseling
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-gold mr-2 mt-1 flex-shrink-0" />
                    Community integration assistance
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-gold mr-2 mt-1 flex-shrink-0" />
                    Regular check-ins and follow-up
                  </li>
                </ul>
              </div>
              
              <Link
                href="/contact"
                className="inline-flex items-center bg-accent-gold hover:bg-accent-gold-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Become a Mentor
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            {/* Sponsor a Student */}
            <div className="bg-secondary-blue/10 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-secondary-blue rounded-full flex items-center justify-center mr-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-700">Sponsor a Student</h3>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Make a direct impact by sponsoring a student's education and development. 
                Your monthly contribution of $25 covers educational materials, mentorship, and program participation.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-primary-600 mb-3">Your $25/month provides:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-gold mr-2 mt-1 flex-shrink-0" />
                    Educational materials and books
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-gold mr-2 mt-1 flex-shrink-0" />
                    Access to all program activities
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-gold mr-2 mt-1 flex-shrink-0" />
                    One-on-one mentorship
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-gold mr-2 mt-1 flex-shrink-0" />
                    Event participation and meals
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-gold mr-2 mt-1 flex-shrink-0" />
                    Emergency support when needed
                  </li>
                </ul>
              </div>
              
              <Link
                href="/donate"
                className="inline-flex items-center bg-secondary-blue hover:bg-secondary-blue/80 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Sponsor Now ($25/month)
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            {/* Partnership */}
            <div className="bg-secondary-teal/10 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-secondary-teal rounded-full flex items-center justify-center mr-4">
                  <UserPlus className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-700">Partner with Us</h3>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Organizations, mosques, and community groups can partner with us to expand our reach 
                and impact. Together, we can serve more people and strengthen our community.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-primary-600 mb-3">Partnership Opportunities:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-gold mr-2 mt-1 flex-shrink-0" />
                    Mosque collaborations and programs
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-gold mr-2 mt-1 flex-shrink-0" />
                    Educational institution partnerships
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-gold mr-2 mt-1 flex-shrink-0" />
                    Community organization alliances
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-gold mr-2 mt-1 flex-shrink-0" />
                    Corporate sponsorship opportunities
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-accent-gold mr-2 mt-1 flex-shrink-0" />
                    Joint events and initiatives
                  </li>
                </ul>
              </div>
              
              <Link
                href="/contact"
                className="inline-flex items-center bg-secondary-teal hover:bg-secondary-teal/80 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Explore Partnership
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements and Training */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Training and Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive training and ongoing support for all volunteers and mentors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">
                Comprehensive Training
              </h3>
              <p className="text-gray-600">
                All volunteers and mentors receive thorough training on our programs, 
                Islamic principles, and effective support techniques.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent-gold-dark" />
              </div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">
                Ongoing Support
              </h3>
              <p className="text-gray-600">
                Regular check-ins, peer support groups, and continuous learning 
                opportunities to help you succeed in your role.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-secondary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-secondary-blue" />
              </div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">
                Recognition
              </h3>
              <p className="text-gray-600">
                We celebrate and recognize the valuable contributions of our 
                volunteers and mentors through various appreciation programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Volunteer Requirements
            </h2>
            <p className="text-lg text-gray-600">
              Basic requirements to ensure the safety and effectiveness of our programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-700 mb-4">
                General Volunteers
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Commitment to our mission and values
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Reliable and punctual attendance
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Respectful and inclusive attitude
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Willingness to learn and grow
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Background check (for certain roles)
                </li>
              </ul>
            </div>
            
            <div className="bg-accent-gold/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-700 mb-4">
                Mentors
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Strong Islamic knowledge and practice
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Experience in community service
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Excellent communication skills
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Patience and empathy
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Completion of mentor training program
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join our community of dedicated volunteers and mentors who are changing lives every day
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent-gold hover:bg-accent-gold-dark text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="/programs"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Learn About Our Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}