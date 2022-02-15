const scope = 'vCopy'

/**
 * v-copy
 * @description 复制内容
 */
const copy = {
  inserted(el, binding) {
    el.dataset.copy = binding.value

    const onClick = () => {
      const textarea = document.createElement('textarea')
      textarea.readOnly = 'readonly'
      textarea.style.position = 'fixed'
      textarea.style.top = '-99999px'
      textarea.value = el.dataset.copy || ''
      document.body.appendChild(textarea)
      textarea.select()
      const res = document.execCommand('Copy')
      res && console.log('复制成功！')
      document.body.removeChild(textarea)
    }
    
    el[scope] = { onClick }
    el.addEventListener('click', onClick)
  },

  update(el, binding) {
    el.dataset.copy = binding.value
  },

  unbind(el) {
    const { onClick } = el[scope]
    el.removeEventListener('click', onClick)
  }
}
copy.install = function(Vue) {
  Vue.directive('Copy', this)
}

export default copy