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
    '@vite-pwa/nuxt',
    '@nuxthub/core'
  ],

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4
  },

  // devServer: {
  //   https: {
  //     key: './server/ssl/localhost-key.pem',
  //     cert: './server/ssl/localhost.pem'
  //   }
  // },

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
  },

  app: {
    head: {
      meta: [
        { name: "theme-color", content: "#FFFFFF", media: "(prefers-color-scheme: light)" },
        { name: "theme-color", content: "#000000", media: "(prefers-color-scheme: dark)" },
      ]
    },
  },
  pwa: {
    manifest: {
      id: '/',
      name: 'Martin Luther Foundation App',
      short_name: 'M.L.F App',
      description: 'Martin Luther Foundation application',
      theme_color: '#000000',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'pwa-maskable-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: 'pwa-maskable-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        },

      ],
      screenshots: [
        {
          src: "screenshot_narrow.png",
          sizes: "320x320",
          type: "image/png",
          form_factor: "wide"
        },
        {
          src: "screenshot_wide.png",
          sizes: "640x320",
          type: "image/png",
          form_factor: "narrow"
        },
      ]

    },
    registerType: "autoUpdate",
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module"
    }
  }
})