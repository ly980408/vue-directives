const defaultEventType = 'click'
const defaultDelay = 300

/**
 * v-debounce
 * @description 事件防抖
 * @example
 *  默认用法  `<button v-debounce="onClick"></button>`
 *  指定事件类型，默认为 click  `<input v-debounce:input="onInput" />`
 *  指定事件延迟，默认为 300    `<input v-debounce:input="onInput" debounce-delay="500" />`
 */
const debounce = {
  inserted(el, binding) {
    const fn = binding.value
    const eventType = binding.arg || defaultEventType
    const delay = Number(el.getAttribute('debounce-delay')) || defaultDelay

    let timer
    el.addEventListener(eventType, () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fn()
      }, delay)
    })
  }
}
debounce.install = function(Vue) {
  Vue.directive('Debounce', this)
}

export default debounce