import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#667eea',
            secondary: '#764ba2',
            'indigo-600': '#4f46e5',
            'indigo-800': '#3730a3',
            'indigo-darken-2': '#3730a3'
          }
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
