// 导入组件，组件必须声明 name
import carousel from './src'
import item from './src/item'

// 为组件提供 install 安装方法，供按需引入
carousel.install = function(Vue) {
    Vue.component(carousel.name, carousel)
}
item.install = function(Vue) {
    Vue.component(item.name, item)
}

// 导出组件
export var carousel = carousel;
export var carouselItem = item;