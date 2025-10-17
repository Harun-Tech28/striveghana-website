'use client'

import { organizationData } from '@/data/organization'
import QuranicVerse from '@/components/ui/QuranicVerse'
import { Users, Target, Eye, Award } from 'lucide-react'

export default function AboutPage() {
  const { 
    mission, 
    vision, 
    coreObjectives, 
    organizationalStructure, 
    quranicVerses,
    striveInitiative 
  } = organizationData

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
              About Strive
            </h1>
            <div className="text-2xl arabic-text text-accent-gold mb-6">
              السعي
            </div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              A faith-based, community-driven initiative designed to bring together young Muslims 
              and new converts, helping them grow in Islam, find belonging, and contribute positively to the Ummah.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-primary-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-primary-500 mr-3" />
                <h2 className="text-2xl font-bold text-primary-700">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {mission}
              </p>
            </div>
            
            <div className="bg-accent-gold/10 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-accent-gold-dark mr-3" />
                <h2 className="text-2xl font-bold text-primary-700">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRIVE Initiative */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              The STRIVE Initiative
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our name represents our core approach to empowering youth and new converts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {striveInitiative.meaning.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.letter}
                </div>
                <h3 className="text-xl font-bold text-primary-700 mb-2">
                  {item.word}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Our Core Objectives
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Six fundamental goals that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreObjectives.map((objective, index) => (
              <div
                key={objective.id}
                className="bg-primary-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{objective.icon}</div>
                <h3 className="text-xl font-bold text-primary-700 mb-3">
                  {objective.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Organizational Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our leadership and departmental structure ensures effective governance and program delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Board of Directors */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-accent-gold mr-2" />
                <h3 className="text-xl font-bold text-primary-700">
                  Board of Directors / Advisory Council
                </h3>
              </div>
              <ul className="space-y-2">
                {organizationalStructure.board.map((member, index) => (
                  <li key={index} className="text-gray-600">
                    • {member.role}
                  </li>
                ))}
              </ul>
            </div>

            {/* Executive Team */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-primary-500 mr-2" />
                <h3 className="text-xl font-bold text-primary-700">
                  Executive Team
                </h3>
              </div>
              <ul className="space-y-3">
                {organizationalStructure.executiveTeam.map((member, index) => (
                  <li key={index} className="text-gray-600">
                    <div className="font-medium text-primary-600">{member.title}</div>
                    <div className="text-sm">{member.role}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Departments */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-secondary-blue mr-2" />
                <h3 className="text-xl font-bold text-primary-700">
                  Departments & Committees
                </h3>
              </div>
              <ul className="space-y-3">
                {organizationalStructure.departments.map((dept, index) => (
                  <li key={index} className="text-gray-600">
                    <div className="font-medium text-primary-600">{dept.name}</div>
                    <div className="text-sm">{dept.description}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meaning of Strive */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              The Meaning of "Strive"
            </h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {/* General Meaning */}
            <div className="bg-primary-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">General Meaning</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To make a great effort to achieve or accomplish something. It often implies persistent, 
                determined, or vigorous effort especially in the face of difficulty or obstacles. 
                In other words, try very hard to do something or achieve something.
              </p>
            </div>

            {/* Religious Context */}
            <div className="bg-accent-gold/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">Religious Context (Islamic)</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                In Islam, striving refers to making effort in obedience to Allah and adhering to His commands, 
                struggling against the self, desires, and Satan. It includes diligence in:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Seeking Knowledge:</strong> Striving to understand religion and act upon it</li>
                <li>• <strong>Righteous Deeds:</strong> To serve the community and build the Ummah</li>
                <li>• <strong>Patience and Self-struggle:</strong> To face challenges and obstacles in the path of truth</li>
              </ul>
            </div>

            {/* Motivational Context */}
            <div className="bg-secondary-blue/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">Motivational Context</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To strive means to give your utmost effort to reach your goal, no matter the obstacles. 
                It is unyielding determination, endless perseverance, and steady steps toward greatness. 
                In Islam, striving is not just movement - it is worship, knowledge, and righteous deeds 
                that bring you closer to Allah and make you a source of benefit for your community and the Ummah.
              </p>
              <p className="text-primary-600 font-semibold mt-4 text-lg">
                "Don't settle for average - strive to become the best version of yourself every day."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quranic Verses */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Divine Guidance on Striving
            </h2>
            <p className="text-lg text-gray-600">
              The Quran emphasizes the importance of striving in the path of Allah
            </p>
          </div>
          
          <div className="space-y-8">
            {quranicVerses.map((verse, index) => (
              <QuranicVerse
                key={index}
                arabicText={verse.arabicText}
                translation={verse.translation}
                reference={verse.reference}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}