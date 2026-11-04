/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#050505',
          'deep-black': '#0B0B0B',
          surface: '#121212',
          'surface-2': '#1A1A1A',
          'surface-3': '#222222',
          gold: '#FFC400',
          'gold-warm': '#FFCC00',
          'gold-muted': '#E6B000',
          white: '#FFFFFF',
          'text-secondary': '#B8B8B8',
          'text-muted': '#858585',
          'text-dim': '#555555',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
