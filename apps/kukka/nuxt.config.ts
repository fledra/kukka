// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    host: '0.0.0.0',
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
  },
});
