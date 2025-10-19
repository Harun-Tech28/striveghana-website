'use client'

// Home Page - All Learn More links fixed and verified
import Hero from '@/components/ui/Hero'
import ProgramCard from '@/components/ui/ProgramCard'
import StatsCounter from '@/components/ui/StatsCounter'
import QuranicVerse from '@/components/ui/QuranicVerse'
import { organizationData } from '@/data/organization'
import Link from 'next/link'
import { Heart, Users, BookOpen, Share2 } from 'lucide-react'

export default function Home() {
    const { programs, yearOneGoals, quranicVerses, coreObjectives } = organizationData

    return (
        <>
            {/* Hero Section */}
            <Hero
                title={organizationData.name.english}
                subtitle={organizationData.motto}
                description={organizationData.mission}
                backgroundImage="/images/hero-strive.jpg"
                ctaButtons={[
                    { text: 'Donate Now', href: '/donate', variant: 'primary' },
                    { text: 'Learn More', href: '/about', variant: 'outline' }
                ]}
            />

            {/* Why Strive Section with Image */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
                            Why Strive?
                        </h2>
                        <div className="w-24 h-1 bg-accent-gold mx-auto mb-6"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-primary-600 mb-6">
                                Addressing Critical Needs in Our Community
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        Rising numbers of new converts face spiritual confusion, social isolation, and lack of guidance
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        Many youth feel disconnected from the masjid, misunderstood, or directionless
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        We address these issues through a faith-grounded, mentorship-based approach
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary-50 rounded-xl p-8">
                            <h4 className="text-xl font-bold text-primary-700 mb-4">Our Solution</h4>
                            <p className="text-gray-700 leading-relaxed">
                                Strive provides faith, guidance, and belonging through solid mentorship and a supportive community.
                                We create an environment where young Muslims and new converts can grow spiritually, develop leadership
                                skills, and contribute positively to the Ummah.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Islamic Learning Image Section */}
            <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-500 relative overflow-hidden">
                <div className="absolute inset-0 islamic-pattern opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Islamic Education in Ghana
                            </h2>
                            <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                                We provide authentic Islamic education rooted in the Quran and Sunnah,
                                tailored for the Ghanaian Muslim community. Our programs combine traditional
                                Islamic scholarship with modern teaching methods.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white font-bold">✓</span>
                                    </div>
                                    <p className="text-gray-100">Quran recitation and memorization classes</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white font-bold">✓</span>
                                    </div>
                                    <p className="text-gray-100">Arabic language instruction</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white font-bold">✓</span>
                                    </div>
                                    <p className="text-gray-100">Islamic studies and Fiqh</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white font-bold">✓</span>
                                    </div>
                                    <p className="text-gray-100">Character development and Islamic ethics</p>
                                </div>
                            </div>
                            <div className="mt-8">
                                <Link
                                    href="/programs"
                                    className="inline-block bg-accent-gold hover:bg-accent-gold-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                                >
                                    Explore Our Classes
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Islamic learning and Quran study in Ghana"
                                    className="w-full h-[400px] object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-gold rounded-full opacity-20"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-white rounded-full opacity-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
                            Our Core Programs
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive support through four main program tracks designed to empower and educate
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
                                link="/programs"
                                index={index}
                            />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/programs"
                            className="btn-primary"
                        >
                            View All Programs
                        </Link>
                    </div>
                </div>
            </section>

            {/* Community Image Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="rounded-xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Muslim community gathering and brotherhood in Ghana"
                                    className="w-full h-[400px] object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-500 rounded-full opacity-20"></div>
                            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                                <p className="text-primary-700 font-bold text-lg">Join 35+ Youth</p>
                                <p className="text-gray-600 text-sm">Growing Together in Faith</p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">
                                Building Strong Muslim Brotherhood
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                At Strive, we believe in the power of community. Our programs bring together
                                Muslims from diverse backgrounds to create lasting bonds of brotherhood and sisterhood,
                                united in faith and purpose.
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong className="text-primary-600">Weekly gatherings</strong> for prayer, learning, and fellowship
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong className="text-primary-600">Mentorship circles</strong> connecting experienced Muslims with new converts
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        <strong className="text-primary-600">Community service</strong> projects serving Ghana's Muslim community
                                    </p>
                                </div>
                            </div>
                            <Link
                                href="/get-involved"
                                className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                            >
                                Join Our Community
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <StatsCounter stats={yearOneGoals} />

            {/* Core Objectives Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
                            The STRIVE Initiative
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Support • Teach • Reach • Inspire • Value • Empower
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreObjectives.map((objective, index) => (
                            <div
                                key={objective.id}
                                className="text-center p-6 bg-primary-50 rounded-xl hover:shadow-lg transition-shadow"
                            >
                                <div className="text-4xl mb-4">{objective.icon}</div>
                                <h3 className="text-xl font-bold text-primary-700 mb-3">
                                    {objective.title}
                                </h3>
                                <p className="text-gray-600">
                                    {objective.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quranic Verse Section */}
            <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-gold/10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <QuranicVerse
                        arabicText={quranicVerses[0].arabicText}
                        translation={quranicVerses[0].translation}
                        reference={quranicVerses[0].reference}
                    />
                </div>
            </section>

            {/* How You Can Support Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
                            How You Can Support
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Join us in making a difference in the lives of youth and new converts
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-accent-gold/10 rounded-xl">
                            <Heart className="w-12 h-12 text-accent-gold mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-primary-700 mb-3">
                                Sponsor a Student
                            </h3>
                            <p className="text-gray-600 mb-4">
                                $25/month supports a student's education and development
                            </p>
                            <Link href="/donate" className="btn-secondary text-sm">
                                Sponsor Now
                            </Link>
                        </div>

                        <div className="text-center p-6 bg-primary-50 rounded-xl">
                            <Users className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-primary-700 mb-3">
                                Volunteer
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Share your skills and time to help our community grow
                            </p>
                            <Link href="/get-involved" className="btn-outline text-sm">
                                Get Involved
                            </Link>
                        </div>

                        <div className="text-center p-6 bg-secondary-blue/10 rounded-xl">
                            <BookOpen className="w-12 h-12 text-secondary-blue mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-primary-700 mb-3">
                                Become a Mentor
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Guide and support new Muslims on their journey
                            </p>
                            <Link href="/get-involved" className="btn-outline text-sm">
                                Learn More
                            </Link>
                        </div>

                        <div className="text-center p-6 bg-secondary-teal/10 rounded-xl">
                            <Share2 className="w-12 h-12 text-secondary-teal mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-primary-700 mb-3">
                                Spread the Word
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Help us reach more people who need our support
                            </p>
                            <Link href="/contact" className="btn-outline text-sm">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-primary-700 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Make a Difference?
                    </h2>
                    <p className="text-xl text-gray-200 mb-8">
                        Join us in building a resilient, educated, and spiritually grounded generation
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/donate"
                            className="bg-accent-gold hover:bg-accent-gold-dark text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
                        >
                            Donate Today
                        </Link>
                        <Link
                            href="/get-involved"
                            className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
                        >
                            Get Involved
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}