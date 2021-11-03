module.exports = {
    mode: 'jit',
    purge: {
        content: [
          `components/**/*.{vue,ts}`,
          `layouts/**/*.vue`,
          `pages/**/*.vue`,
          `plugins/**/*.ts`,
          `nuxt.config.ts`
        ]
      },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }