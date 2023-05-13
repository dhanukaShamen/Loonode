/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
    extend: {
      colors: {
        'accent-color': 'var(--ghost-accent-color)',
        'btn-bg': 'rgba(217, 217, 217, 0.3)',
        'btn-bg-ho': 'rgba(217, 217, 217, 0.5)',
        'carousel-bg': 'rgba(0, 0, 0, 0.05)',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(255, 255, 255, 0.7)',
        '4xl': '0 4px 16px rgba(0,0,0,.04)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

