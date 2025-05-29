/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        happy: {
          100: '#ffebe3',
          500: '#f28c8c'
        },
        calm: {
          100: '#e3f6ff',
          500: '#7ec8e3'
        },
        stressed: {
          100: '#fff2e0',
          500: '#f5b971'
        },
        energetic: {
          100: '#e5f8ea',
          500: '#8ed9a3'
        },
        sad: {
          100: '#f0edff',
          500: '#9b88cb'
        },
        focused: {
          100: '#e8eeff',
          500: '#738ff3'
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  },
  safelist: [
    'bg-happy-100', 'bg-happy-500', 
    'bg-calm-100', 'bg-calm-500',
    'bg-stressed-100', 'bg-stressed-500',
    'bg-energetic-100', 'bg-energetic-500',
    'bg-sad-100', 'bg-sad-500',
    'bg-focused-100', 'bg-focused-500',
  ],
  plugins: [],
};