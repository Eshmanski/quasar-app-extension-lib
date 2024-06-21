import { boot } from 'quasar/wrappers'
import VuePlugin from '@eshmanski/quasar-ui-lib'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
