// 导入组件，组件必须声明 name
import divider from './src'

// 为组件提供 install 安装方法，供按需引入
divider.install = function(Vue) {
    Vue.component(divider.name, divider)
}

// 导出组件
export default divider