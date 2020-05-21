// 导入组件，组件必须声明 name
import checkbox from './src'
import checkboxGroup from './src/group'

// 为组件提供 install 安装方法，供按需引入
checkbox.install = function(Vue) {
    Vue.component(checkbox.name, checkbox)
}
checkboxGroup.install = function(Vue) {
    Vue.component(checkbox.name, checkbox)
}

// 导出组件
export var Checkbox = checkbox;
export var CheckboxGroup = checkboxGroup;