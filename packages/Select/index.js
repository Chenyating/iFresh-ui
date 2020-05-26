// 导入组件，组件必须声明 name
import select from './src'
import option from './src/option'

// 为组件提供 install 安装方法，供按需引入
select.install = function(Vue) {
    Vue.component(select.name, select)
}
option.install = function(Vue) {
    Vue.component(option.name, option)
}

// 导出组件
export var Select = select;
export var Option = option;