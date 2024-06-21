import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'selector',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      primary: 'var(--primary-font)',
      secondary: 'var(--secondary-font)',
      third: 'var(--third-font)',
    },
    screens: {
      // sm: 'var(--sm-screen)',
      // md: 'var(--md-screen)',
      // lg: 'var(--lg-screen)',
      // xl: 'var(--xl-screen)',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        black: 'var(--black-color)',
        grey: 'var(--white-color)',
        white: 'var(--accent-color)',
        accent: 'var(--accent-color)',
        error: 'var(--error-color)',
      },
    },
  },
  plugins: [],
};
export default config;
