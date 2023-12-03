import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        "10xl": "8.5rem",
        "11xl": "11rem",
        "12xl": "13rem",
      },
      animation: {
        letterUp: 'letterUp 3000ms ease-in-out var(--delay, 0)',
        letterUpDisappear: 'letterUpDisappear 1500ms ease-in-out var(--delay, 0) forwards',
      },
      keyframes: {
        letterUp: {
          '0%': { transform: 'translateY(100%)' },
          "30%, 70%": { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' }
        },
        letterUpDisappear: {
          '0%': { transform: 'translateY(100%)' },
          "30%": { transform: 'translateY(0)' },
          "70%": { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}
export default config
