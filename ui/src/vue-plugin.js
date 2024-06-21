import Component from './components/Component.vue'
import Directive from './directives/Directive'


const version = __UI_VERSION__

function install (app, opts) {
  app.component(Component.name, Component)
  app.directive(Directive.name, Directive)

  console.log(app)
}

export {
  version,
  Component,
  Directive,
  install
}
