module.exports = {
  content: [
    './*.{html,js,jsx}',
    './src/**/*.{html,js,jsx}',
    './src/assets/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        '500': '31.25em',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}