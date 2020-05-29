// 导入组件，组件必须声明 name
import tag from './src'

// 为组件提供 install 安装方法，供按需引入
tag.install = function(Vue) {
    Vue.component(tag.name, tag)
}

// 导出组件
export default tag