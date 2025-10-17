'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface ProgramCardProps {
  title: string
  description: string
  activities: string[]
  icon: string
  link: string
  index?: number
}

const ProgramCard = ({ title, description, activities, icon, link, index = 0 }: ProgramCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      <div className="p-6">
        {/* Icon and Title */}
        <div className="flex items-center mb-4">
          <div className="text-4xl mr-4">{icon}</div>
          <h3 className="text-xl font-bold text-primary-700 group-hover:text-primary-500 transition-colors">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Activities */}
        <div className="mb-6">
          <h4 className="font-semibold text-primary-600 mb-2">Key Activities:</h4>
          <ul className="space-y-1">
            {activities.map((activity, idx) => (
              <li key={idx} className="text-gray-600 text-sm flex items-start">
                <span className="text-accent-gold mr-2">•</span>
                {activity}
              </li>
            ))}
          </ul>
        </div>

        {/* Learn More Link */}
        <Link
          href={link}
          className="inline-flex items-center text-primary-500 hover:text-primary-700 font-medium transition-colors group"
        >
          Learn More
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Decorative Border */}
      <div className="h-1 bg-gradient-to-r from-primary-500 to-accent-gold"></div>
    </motion.div>
  )
}

export default ProgramCard