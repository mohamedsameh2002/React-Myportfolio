/** @type {import('tailwindcss').Config} */


export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", 'sans-serif']
      },
      keyframes: {
        profAnim: {
          '0%, 100%': { borderRadius: '60% 50% 70% 70% / 60% 70% 70% 50%' },
          '50%': { borderRadius: '60% 60% 70% 40% / 60% 60% 60% 60%' },
          '100%': { borderRadius: '60% 50% 70% 70% / 60% 70% 70% 50%' },
        },
        lanidingAnim: {
          '0%': { filter: 'blur(100px)' },
          '10%': { filter: 'blur(90px)' },
          '20%': { filter: 'blur(80px)' },
          '30%': { filter: 'blur(70px)' },
          '40%': { filter: 'blur(60px)' },
          '50%': { filter: 'blur(50px)' },
          '60%': { filter: 'blur(40px)' },
          '70%': { filter: 'blur(30px)' },
          '80%': { filter: 'blur(20px)' },
          '90%': { filter: 'blur(10px)' },
          '100%': { filter: ' blur(0px)' },
        },
      },
      animation: {
        profAnim: 'profAnim 5s ease-in-out infinite',
        lanidingAnim: 'lanidingAnim 1s ease-in ',
      }
    },
  },
  plugins: [],
}