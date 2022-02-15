/**
 * v-focus
 * @description 页面加载时，使该元素自动获取焦点
 */
const focus = {
  inserted(el) {
    el.focus()
  }
}
focus.install = function(Vue) {
  Vue.directive('Focus', this)
}

export default focus