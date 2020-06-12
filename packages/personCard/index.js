// 导入组件，组件必须声明 name
import personCard from './src'

// 为组件提供 install 安装方法，供按需引入
personCard.install = function(Vue) {
    Vue.component(personCard.name, personCard)
}

// 导出组件
export default personCard