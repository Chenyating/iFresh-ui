// 导入组件，组件必须声明 name
import gallery from './src'
import item from './src/item'

// 为组件提供 install 安装方法，供按需引入
gallery.install = function(Vue) {
    Vue.component(gallery.name, gallery)
}
item.install = function(Vue) {
    Vue.component(item.name, item)
}

// 导出组件
export var Gallery = gallery;
export var GalleryItem = item;