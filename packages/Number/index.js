// 导入组件，组件必须声明 name
import number from './src'

// 为组件提供 install 安装方法，供按需引入
number.install = function(Vue) {
    Vue.component(number.name, number)
}

// 导出组件
export default number