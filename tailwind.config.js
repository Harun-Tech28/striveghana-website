/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f4',
          100: '#dcf2e4',
          500: '#2D5F3F',
          600: '#4A8B5C',
          700: '#1A3D28',
        },
        accent: {
          gold: '#D4AF37',
          'gold-light': '#E8C968',
          'gold-dark': '#B8941F',
        },
        secondary: {
          blue: '#1E5A7D',
          teal: '#2C7A7B',
        },
      },
      fontFamily: {
        arabic: ['Amiri', 'Traditional Arabic', 'serif'],
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'islamic-pattern': "url('/patterns/islamic-geometric.svg')",
      },
    },
  },
  plugins: [],
}