/* 
  v-debounce 事件防抖
    默认为 click 事件
    <button v-debounce="onClick" ></button>
    也可以指定事件类型进行绑定
    <input v-debounce:input="onInput" />
*/
const debounce = {
  inserted(el, binding) {
    const eventType = binding.arg || 'click'
    let timer
    el.addEventListener(eventType, () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 300)
    })
  }
}

export default debounce