import focus from './src/focus'
import copy from './src/copy'
import debounce from './src/debounce'

const directives = {
  focus,
  copy,
  debounce
}

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  }
}