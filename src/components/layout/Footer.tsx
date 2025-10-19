import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { organizationData } from '@/data/organization'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex flex-col">
                <div className="text-2xl font-bold font-heading">
                  {organizationData.name.english}
                </div>
                <div className="text-lg arabic-text text-accent-gold">
                  {organizationData.name.arabic}
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {organizationData.mission}
            </p>
            <p className="text-sm text-accent-gold font-medium">
              Zakat & Sadaqat Accepted - All donations used for community service
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-gray-300 hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-300 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href={`tel:${organizationData.contact.phone}`}
                    className="text-gray-300 hover:text-white transition-colors block"
                  >
                    {organizationData.contact.phoneDisplay}
                  </a>
                  <a 
                    href={`https://wa.me/${organizationData.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors text-sm"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href={`mailto:${organizationData.contact.email}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {organizationData.contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>{organizationData.contact.address.poBox}</p>
                  <p>{organizationData.contact.address.street}</p>
                  <p>{organizationData.contact.address.city}, {organizationData.contact.address.region}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © {currentYear} StriveGhana. All rights reserved. | Non-profit Islamic Organization
          </div>
          <div className="text-gray-300 text-sm">
            <a href="https://striveghana.org" className="hover:text-white transition-colors">
              {organizationData.contact.website}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer