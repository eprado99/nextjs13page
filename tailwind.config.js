/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['var(--font-manrope)'],
        mono: ['var(--font-roboto-mono)'],
        kleeone: ['var(--font-klee-one)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
