// 导入组件，组件必须声明 name
import icon from './src'

// 为组件提供 install 安装方法，供按需引入
icon.install = function(Vue) {
    Vue.component(icon.name, icon)
}

// 导出组件
export default icon