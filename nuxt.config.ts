import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'storeToRefs'],
      },
    ],
    ['@nuxtjs/tailwindcss', { viewer: true }],
    '@vueuse/nuxt',
  ],
  alias: {
    // basic aliases
    '@/': '/',
    '@assets/': '/assets/',
    '@composables/': '/composables/',
    '@layouts/': '/layouts/',
    '@middleware/': '/middleware/',
    '@plugins/': '/plugins/',
    '@pages/': '/pages/',
    '@views/': '/pages/',
    '@server/': '/server/',

    // aliases with depth
    '@@images/': '/assets/images/',
    '@@fonts/': '/assets/fonts/',
    '@@styles/': '/assets/styles/',

    // alias shortcuts
    'a~/': '/assets/',
    'c~/': '/composables/',
    'l~/': '/layouts/',
    'm~/': '/middleware/',
    'pl~/': '/plugins/',
    'pa~/': '/pages/',
    's~/': '/server/',
  },
})
