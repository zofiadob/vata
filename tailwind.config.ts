import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'krona': ['"Krona One"', 'sans-serif'],
      'krub': ['Krub', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        'white': '#ffffff',
        'main-violet': '#6C63FF',
        'light-violet': '#A19BFF',
        'menu-violet': '#7B73FF',
        'dark-grey': '#414141',
        'disabled-grey': '#B1B1B1',
      }
    },
  },
  plugins: [],
}
export default config
