/**
 * Prettier is used ONLY for `.astro` files, which oxfmt cannot format yet
 * (tracked upstream: https://github.com/oxc-project/oxc/issues/19715).
 * Everything else is formatted by oxfmt (see `.oxfmtrc.json`).
 */
export default {
  singleQuote: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
