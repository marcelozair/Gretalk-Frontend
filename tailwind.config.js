/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* COLORS */
        'primary': 'var(--primary)',
        'secundary': 'var(--secundary)',

        /* BASE COLORS */
        'black': 'var(--black)',
        'white': 'var(--white)',
        'app-error': 'var(--app-error)',
        'app-normal': 'var(--app-normal)',
        'app-success': 'var(--app-success)',
        'app-gray': 'var(--app-gray)',

        'black-70': 'var(--black-70)',
        'black-50': 'var(--black-50)',
        'black-30': 'var(--black-30)',
        'black-10': 'var(--black-10)',

        /* BORDER */
        'app-gray-50': 'var(--app-gray-50)',
        'app-border': 'var(--app-border)',
      },
      width: {
        'max-container': 'var(--max-container)',
        'max-aside': 'var(--max-aside)',
      },
      backgroundImage: {
        hero:  "url('/images/background.svg')",
      },
    },
  },
  plugins: [],
}
