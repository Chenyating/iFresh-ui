// 导入组件，组件必须声明 name
import timeAxis from './src'
import item from './src/item'

// 为组件提供 install 安装方法，供按需引入
timeAxis.install = function(Vue) {
    Vue.component(timeAxis.name, timeAxis)
}
item.install = function(Vue) {
    Vue.component(item.name, item)
}

// 导出组件
export var TimeAxis = timeAxis;
export var TIMEAxisItem = item;