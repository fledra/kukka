// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  telemetry: false,

  devServer: {
    port: 1337,
  },

  devtools: {
    enabled: true,
  },

  imports: {
    autoImport: true,
  },

  typescript: {
    strict: true,
    typeCheck: true,
    includeWorkspace: true,
    tsConfig: {
      compilerOptions: {
        baseUrl: '.',
      },
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/main.scss";',
        },
      },
    },
  },
  modules: ['vuetify-nuxt-module', 'nuxt-icon'],

  vuetify: {
    moduleOptions: {
      prefixComposables: true,
    },
  },
});
