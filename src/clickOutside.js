/**
 * v-clickOutside
 * @description 点击元素外部时触发对应方法
 */

const scope = 'vClickOutside'

const clickOutside = {
  inserted: function(el, binding) {
    const callback = binding.value
    
    const onClick = event => {
      if (el && !el.contains(event.target)) {
        callback(event)
      }
    }

    el[scope] = { onClick }

    document.addEventListener('click', onClick)
  },

  unbind: function(el) {
    const { onClick } = el[scope]
    document.removeEventListener('click', onClick)
  }

}

export default clickOutside