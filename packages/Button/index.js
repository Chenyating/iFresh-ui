// 导入组件，组件必须声明 name
import btn from './src'
import btnGroup from './src/group'

// 为组件提供 install 安装方法，供按需引入
btn.install = function(Vue) {
    Vue.component(btn.name, btn)
}
btnGroup.install = function(Vue) {
    Vue.component(btnGroup.name, btn)
}

// 导出组件
export var Button = btn;
export var ButtonGroup = btnGroup;