
module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['layouts/**/*.html'],
      whitelist: [
        'highlight',
        'language-bash',
        'pre',
        'code',
        'content',
        'h3',
        'h4',
        'ul',
        'li'
      ]
    },
    autoprefixer: {},
    cssnano: { preset: 'default' }
  }
};