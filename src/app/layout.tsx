import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'StriveGhana - السعي | Islamic Youth & New Convert Support',
  description: 'Supporting and empowering youth and new converts through faith, unity, and personal growth. Islamic education, mentorship, and community engagement in Ghana.',
  keywords: 'Islamic organization, Ghana, youth empowerment, new converts, Islamic education, mentorship, community support, striveghana',
  authors: [{ name: 'StriveGhana' }],
  openGraph: {
    title: 'StriveGhana - السعي | Islamic Youth & New Convert Support',
    description: 'Supporting and empowering youth and new converts through faith, unity, and personal growth.',
    url: 'https://striveghana.org',
    siteName: 'StriveGhana',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strive Ghana - السعي',
    description: 'Supporting and empowering youth and new converts through faith, unity, and personal growth.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}