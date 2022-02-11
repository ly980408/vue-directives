/**
 * v-focus
 * @description 页面加载时，使该元素自动获取焦点
 */

const focus = {
  inserted: function (el) {
    el.focus()
  }
}

export default focus