import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-lib'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
