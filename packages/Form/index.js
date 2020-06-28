// 导入组件，组件必须声明 name
import form from './src'
import item from './src/item'

// 为组件提供 install 安装方法，供按需引入
form.install = function(Vue) {
    Vue.component(form.name, form)
}
item.install = function(Vue) {
    Vue.component(item.name, item)
}

// 导出组件
export var Form = form;
export var FormItem = item;