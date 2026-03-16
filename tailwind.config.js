/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0D0F",
        surface: "#141418",
        card: "#1A1A22",
        'card-border': "#2A2A35",
        primary: {
          purple: "#7B5EA7",
          orange: "#E8956D",
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Manrope', 'sans-serif'],
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        ticker: 'ticker 22s linear infinite',
      },
    },
  },
  plugins: [],
}
