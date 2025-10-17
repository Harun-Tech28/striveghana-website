'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  description?: string
  backgroundImage?: string
  ctaButtons?: Array<{
    text: string
    href: string
    variant: 'primary' | 'secondary' | 'outline'
  }>
}

const Hero = ({ 
  title, 
  subtitle, 
  description, 
  backgroundImage = '/images/hero-bg.jpg',
  ctaButtons = []
}: HeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Islamic Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700/85 to-primary-500/85"></div>
        <div className="absolute inset-0 islamic-pattern opacity-15"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
            {title}
          </h1>
          
          <div className="text-xl md:text-2xl arabic-text text-accent-gold mb-6">
            السعي
          </div>
          
          <p className="text-xl md:text-2xl font-medium mb-6">
            {subtitle}
          </p>
          
          {description && (
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              {description}
            </p>
          )}
          
          {ctaButtons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {ctaButtons.map((button, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={button.href}
                    className={`inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                      button.variant === 'primary'
                        ? 'bg-accent-gold hover:bg-accent-gold-dark text-white'
                        : button.variant === 'secondary'
                        ? 'bg-primary-500 hover:bg-primary-600 text-white'
                        : 'border-2 border-white text-white hover:bg-white hover:text-primary-700'
                    }`}
                  >
                    {button.text}
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  )
}

export default Hero