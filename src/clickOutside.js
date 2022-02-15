const scope = 'vClickOutside'

/**
 * v-clickOutside
 * @description 点击元素外部时触发对应方法
 */
const clickOutside = {
  inserted(el, binding) {
    const callback = binding.value
    
    const onClick = event => {
      if (el && !el.contains(event.target)) {
        callback(event)
      }
    }

    el[scope] = { onClick }

    document.addEventListener('click', onClick)
  },

  unbind(el) {
    const { onClick } = el[scope]
    document.removeEventListener('click', onClick)
  }

}
clickOutside.install = function(Vue) {
  Vue.directive('ClickOutside', this)
}

export default clickOutside