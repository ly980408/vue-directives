import focus from './src/focus'
import copy from './src/copy'
import debounce from './src/debounce'
import clickOutside from './src/clickOutside'

const directives = {
  focus,
  copy,
  debounce,
  clickOutside
}

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  }
}