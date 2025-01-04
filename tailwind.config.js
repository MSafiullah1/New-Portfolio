/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',  // Include all JavaScript/TypeScript/React files
    './src/*.{js,ts,jsx,tsx}',  // Include all JavaScript/TypeScript/React files
    './components/**/*.{js,ts,jsx,tsx}', // Include files in components directory
    './pages/**/*.{js,ts,jsx,tsx}',  // Include files in pages directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


