/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      colors: {
        arcade: {
          bg:      '#0f0f23',
          panel:   '#1a1a3e',
          border:  '#50fa7b',
          green:   '#50fa7b',
          yellow:  '#f1fa8c',
          red:     '#ff5555',
          purple:  '#bd93f9',
          cyan:    '#8be9fd',
          gray:    '#6272a4',
          dark:    '#282a36',
        },
      },
      boxShadow: {
        pixel: '4px 4px 0px rgba(0,0,0,0.8)',
        'pixel-green': '4px 4px 0px #27c65a',
        'pixel-inset': 'inset 2px 2px 0px rgba(0,0,0,0.5)',
      },
      keyframes: {
        blink: { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } },
        scanline: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(100vh)' } },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        scanline: 'scanline 8s linear infinite',
        shake: 'shake 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
}
