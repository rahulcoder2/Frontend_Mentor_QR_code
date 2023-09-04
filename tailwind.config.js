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
        'white': 'hsl(0, 0%, 100%)',
        'Grayish-blue': 'hsl(220, 15%, 55%)',
        'Light-gray': 'hsl(212, 45%, 89%)',
        'Dark-blue': 'hsl(218, 44%, 22%)'
      },
    },
  },
  plugins: [],
}
