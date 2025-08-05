// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css}', // Make sure this covers your React files
    // If your CSS file is processed by Tailwind, it should also be included
    './src/**/*.css'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
