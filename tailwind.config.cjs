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
      },
      boxShadow: {
        'socialIconsDark' : '-1px -1px 1px -1px rgba(227,227,227,0.8)',
        'socialIcons' : '-1px -1px 1px -1px rgba(0, 0, 0, 0.8)',
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