/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#020617",
          // ربط المتغيرات التي برمجناها في index.css
          primary: 'rgb(var(--primary) / <alpha-value>)',
          accent: 'rgb(var(--accent) / <alpha-value>)',
          danger: "#f43f5e",
        }
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px', // تأثير الزجاج الفاخر
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
