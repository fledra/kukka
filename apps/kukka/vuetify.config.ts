// vuetify.config.ts
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration';

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#0e1011',
          surface: '#0e1011',

          primary: '#aebbc3',
          'on-primary': '#0e1011',
          secondary: '#3d515e',
          'on-secondary': '#eceded',
          accent: '#608aa6',
          'on-accent': '#0e1011',

          success: '#55aa71',
          warning: '#dc6504',
          info: '#98c6dd',
          error: '#f36868',
        },
        variables: {
          'layout-left': '300px',
        },
      },
    },
  },
});
