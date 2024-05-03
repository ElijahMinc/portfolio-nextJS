import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'selector',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      secondary: 'Mulish',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      colors: {
        primary: 'rgba(147, 197, 253, 0.9)',
        black: 'rgba(0,0,0,0.9)',
        grey: '#484B4B',
        white: '#fff',
        accent: '#EEF7F9',
        error: '#9a4141',
      },
    },
  },
  plugins: [],
};
export default config;
