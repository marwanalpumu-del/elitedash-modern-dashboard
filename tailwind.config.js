/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dynamic protocol mapping
        brand: {
          dark: "#020617",
          // We use RGB variables to allow Tailwind's opacity modifiers (e.g., bg-brand-primary/50)
          primary: 'rgb(var(--primary) / <alpha-value>)',
          accent: 'rgb(var(--accent) / <alpha-value>)',
          danger: "#f43f5e", // Static rose for critical alerts
        }
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px', // For that high-end frosted glass effect
      },
      animation: {
        // Custom animations for cybernetic feel
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem', // Used in our new SystemSettings panels
      }
    },
  },
  plugins: [],
}
