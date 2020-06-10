// 导入组件，组件必须声明 name
import menu from './src'
import item from './src/item'

// 为组件提供 install 安装方法，供按需引入
menu.install = function(Vue) {
    Vue.component(menu.name, menu)
}
item.install = function(Vue) {
    Vue.component(item.name, item)
}

// 导出组件
export var Menu = menu;
export var MenuItem = item;