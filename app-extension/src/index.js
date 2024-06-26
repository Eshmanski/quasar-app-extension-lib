/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 */

function extendConf (conf, api) {
  // register our boot file
  conf.boot.push('~@eshmanski/quasar-app-extension-lib/src/boot/register.js')

  console.log('Plugins: ', conf.framework.plugins)

  conf.framework.plugins.push('Notify')

  console.log('Plugins: ', conf.framework.plugins)

  if (api.hasWebpack) {
    // make sure app extension files & ui package gets transpiled
    const transpileTarget = (
      conf.build.webpackTranspileDependencies // q/app-webpack >= v4
      || conf.build.transpileDependencies // q/app-webpack v3
    )
    transpileTarget.push(/quasar-app-extension-lib[\\/]src/)
  }

  // make sure the stylesheet goes through webpack to avoid SSR issues
  // conf.css.push('~quasar-ui-lib/dist/index.css')
}

export default function (api) {
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of "@quasar/app-*" CLI
  api.compatibleWith('quasar', '^2.0.0')

  if (api.hasVite) {
    api.compatibleWith('@quasar/app-vite', '^1.5.0 || ^2.0.0-beta.1')
  }
  else if (api.hasWebpack) {
    api.compatibleWith('@quasar/app-webpack', '^3.10.0 || ^4.0.0-beta.1')
  }


  // Uncomment the line below if you provide a JSON API for your component
  // api.registerDescribeApi('MyComponent', '~quasar-ui-lib/src/components/MyComponent.json')

  // Uncomment the line below if you provide a JSON API for your directive
  // api.registerDescribeApi('my-directive', '~quasar-ui-lib/src/directives/my-directive.json')


  // We extend /quasar.conf.js
  api.extendQuasarConf(extendConf)
}
