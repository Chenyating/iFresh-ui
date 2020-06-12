// 导入组件，组件必须声明 name
import image from './src'

// 为组件提供 install 安装方法，供按需引入
image.install = function(Vue) {
    Vue.component(image.name, image)
}

// 导出组件
export default image