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

  features: {
    inlineStyles: false,
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

  css: ['~/assets/styles/vuetify/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/helpers" as *;',
        },
      },
    },
  },

  modules: ['vuetify-nuxt-module', 'nuxt-icon', '@nuxtjs/google-fonts'],

  vuetify: {
    moduleOptions: {
      prefixComposables: true,
      styles: {
        configFile: 'assets/styles/vuetify/settings.scss',
      },
    },
  },

  googleFonts: {
    preload: true,
    families: {
      Poppins: [100, 300, 400, 500, 700, 900],
    },
  },
});
