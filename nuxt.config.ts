import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    css: ['~/styles/tailwind.css'],
    build: {
        postcss: {
          postcssOptions: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            }
          }
        },
      }
})
