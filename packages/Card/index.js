// 导入组件，组件必须声明 name
import card from './src'

// 为组件提供 install 安装方法，供按需引入
card.install = function(Vue) {
    Vue.component(card.name, card)
}

// 导出组件
export default card