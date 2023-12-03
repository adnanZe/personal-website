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
        "TitleResXXsm": "4rem",
        "ResXXXsm": "4.75rem",
        "ResXXsm": "6.5rem",
        "ResXsm": "8.25rem",
        "ResSm": "10rem",
        "ResMd": "12rem",
        "ResLg": "17rem",
        "ResXl": "20rem",
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
