/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        xs: '0.875rem',    // 14px
        sm: '1rem',       // 16px
        base: '1.125rem', // 18px
        lg: '1.25rem',    // 20px
        xl: '1.5rem',     // 24px
        '2xl': '1.75rem',   // 28px
        '3xl': '2.125rem',  // 34px
        '4xl': '2.625rem',  // 42px
        '5xl': '3.5rem',    // 56px
        '6xl': '4.5rem',    // 72px
      },
      colors: {
        'brand-blue': '#005A9C', // Example primary blue
        'brand-blue-light': '#E0F2FE', // Light blue for backgrounds/accents
        'brand-teal': '#0D9488', // Teal for CTAs or highlights
        'stone-100': '#F5F5F4', // Warm stone gray
        'slate-900': '#0F172A', // Rich dark color
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
