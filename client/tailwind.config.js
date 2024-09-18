// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        destructive: {
          DEFAULT: '#dc2626', // Red for destructive variant
          foreground: '#ffffff', // White text for contrast
        },
        muted: '#d3d3d3', // Define muted color or adjust accordingly
        foreground: '#333333', // Define foreground color
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

