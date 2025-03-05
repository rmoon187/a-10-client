/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // Add custom animations here
      animation: {
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      // Define the keyframes for the animation
      keyframes: {
        ping: {
          '75%, 100%': {
            transform: 'scale(1.1)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};