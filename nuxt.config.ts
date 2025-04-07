// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',

    '@vueuse/nuxt',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27',
  runtimeConfig: {
    public: {
      storage: process.env.STORAGE_URL || 'https://mlf.qbtech.dev'
    }
  },

  image: {
    dir: 'app/assets/images',
    quality: 100,
    format: ["webp", "avif", "png"],
    domains: [],
    alias: {
      qb: 'https://mlf.qbtech.dev'
    }
  }
})