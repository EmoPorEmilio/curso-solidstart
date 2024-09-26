const { mainTheme } = require('wyvern-ui-test/tailwindcss');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/wyvern-ui-test/dist/index/*',
  ],
  theme: {
    ...mainTheme,
  },
  plugins: [],
};
