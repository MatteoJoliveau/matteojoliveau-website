
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
        'li',
        'is-active',
      ],
      whitelistPatterns: [
        /devicon-\w*-plain/,
        /fa-\w*/,
      ],
    },
    autoprefixer: {},
    cssnano: { preset: 'default' }
  }
};
