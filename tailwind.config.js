/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aayam: {
          orange: '#F15A24',
          'orange-hover': '#D94916',
          'orange-light': '#FFF5F0',
          navy: '#0C1C2E',
          'navy-light': '#182C44',
          slate: '#334155',
          muted: '#64748B',
          border: '#E2E8F0',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 12px 30px -5px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'hero-orange': '0 10px 25px -5px rgba(241, 90, 36, 0.35)',
      }
    },
  },
  plugins: [],
}
