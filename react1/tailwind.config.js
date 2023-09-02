/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      scale: {
        112: '1.12'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
