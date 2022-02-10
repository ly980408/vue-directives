/**
 *  v-copy 复制内容
 */

 const copy = {
  bind: function (el, binding) {
    el.dataset.copy = binding.value

    el.addEventListener('click', eventListener)
  },

  update: function(el, binding) {
    el.dataset.copy = binding.value
  },

  unbind: function(el) {
    el.removeEventListener('click', eventListener)
  }
}

const eventListener = (event) => {
  const textarea = document.createElement('textarea')
  textarea.readOnly = 'readonly'
  textarea.style.position = 'fixed'
  textarea.style.top = '-99999px'
  textarea.value = event.target.dataset.copy || ''
  document.body.appendChild(textarea)
  textarea.select()
  const res = document.execCommand('Copy')
  res && console.log('复制成功！')
  document.body.removeChild(textarea)
}

export default copy