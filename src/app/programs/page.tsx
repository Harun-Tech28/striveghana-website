// Programs Page - Learn More links redirect to contact page
import { organizationData } from '@/data/organization'
import ProgramCard from '@/components/ui/ProgramCard'
import Link from 'next/link'
import { ArrowRight, Users, BookOpen, Heart, Globe } from 'lucide-react'

export default function ProgramsPage() {
  const { programs } = organizationData

  const programIcons: Record<string, JSX.Element> = {
    'new-muslim': <Heart className="w-12 h-12 text-accent-gold" />,
    'youth': <Users className="w-12 h-12 text-primary-500" />,
    'learning': <BookOpen className="w-12 h-12 text-secondary-blue" />,
    'social': <Globe className="w-12 h-12 text-secondary-teal" />
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive support through four main program tracks designed to empower, 
              educate, and integrate youth and new converts into the Islamic community.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Four Core Program Tracks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each program is carefully designed to address specific needs and provide 
              comprehensive support for different aspects of Islamic life and community integration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <ProgramCard
                key={program.id}
                title={program.title}
                description={program.description}
                activities={program.activities}
                icon={program.icon}
                link="/contact"
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Program Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    {programIcons[program.category]}
                    <h3 className="text-3xl font-bold text-primary-700 ml-4">
                      {program.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-primary-600 mb-4">
                      Program Activities:
                    </h4>
                    <ul className="space-y-2">
                      {program.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight className="w-5 h-5 text-accent-gold mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Contact Us to Join
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{program.icon}</div>
                      <h4 className="text-2xl font-bold text-primary-700 mb-4">
                        {program.title}
                      </h4>
                      <div className="w-16 h-1 bg-accent-gold mx-auto mb-4"></div>
                      <p className="text-gray-600 italic">
                        "Empowering through {program.category.replace('-', ' ')}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Program Impact & Goals
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Our programs are designed to create lasting positive change in the lives 
              of participants and the broader community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-gold mb-2">35+</div>
              <p className="text-gray-200">Youth & Converts Reached</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-gold mb-2">20</div>
              <p className="text-gray-200">Community Mentors Trained</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-gold mb-2">5</div>
              <p className="text-gray-200">Program Tracks Launched</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-gold mb-2">3</div>
              <p className="text-gray-200">Mosque Partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
            Ready to Get Involved?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you want to participate in our programs, volunteer, or support our mission, 
            there are many ways to be part of the Strive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Join Our Programs
            </Link>
            <Link
              href="/donate"
              className="bg-accent-gold hover:bg-accent-gold-dark text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Support Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}