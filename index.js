import Focus from './src/focus'
import Copy from './src/copy'
import Debounce from './src/debounce'
import ClickOutside from './src/clickOutside'

const directives = {
  Focus,
  Copy,
  Debounce,
  ClickOutside
}

const install = function(Vue) {
  Object.keys(directives).forEach((key) => {
    Vue.directive(key, directives[key])
  })
}
export default {
  name: 'VueDirectives',
  version: '0.0.0',
  install
}

export {
  Focus,
  Copy,
  Debounce,
  ClickOutside
}
