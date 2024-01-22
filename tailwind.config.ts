import type { Config } from 'tailwindcss';
import { ANIMATE_MS_MENU, ANIMATE_MS_NAME, TRANSITION_TIMING } from './app/_constants/animationSettings';

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
        ascendLetters: `ascendLettersAnimation ${ANIMATE_MS_NAME}ms ${TRANSITION_TIMING} var(--delay, 0)`,
        fadeOutLetters: `fadeOutLettersAnimation ${ANIMATE_MS_MENU}ms ${TRANSITION_TIMING} calc(var(--delay) * 0.25) forwards`,
        elevateContainer: `elevateContainerAnimation ${ANIMATE_MS_MENU}ms ${TRANSITION_TIMING} forwards`,
      },
      keyframes: {
        ascendLettersAnimation: {
          '0%': { transform: 'translateY(100%)' },
          "30%, 80%": { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' }
        },
        fadeOutLettersAnimation: {
          '0%': { transform: 'translateY(100%)' },
          "30%, 100%": { transform: 'translateY(0)' },
        },
        elevateContainerAnimation: {
          "0%": { transform: 'scaleY(0)', transformOrigin: "bottom" },
          "100%": { height: 'scaleY(1)', transformOrigin: "bottom" }
        },
      }
    },
  },
  plugins: [],
}
export default config
