<template>
<tbody :class="classes">
    <tr v-for="(item,index) in data" :key="index">
        <td>{{index}}</td>
        <td v-for="(titleItem,id) in title" :key="id">{{item[titleItem.key]}}
            <!-- <expand /> -->
        </td>
    </tr>
</tbody>
</template>

<script>
const prefixCls = 'if-table-body'
import expand from './expand'
export default {
    render: function (createElements) {
        // 在 webpack 中，如果想要通过 vue， 把一个组件放到页面中去展示，vm 实例中的 render 函数可以实现
        return createElements(expand)
    },
    props: {
        title: {
            type: Array,
        },
        data: {
            type: Array,
        },
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    computed: {
        classes() {
            // return [prefixCls];
        },
        // 关闭颜色
        iconColor() {
            return this.fill ? 'white' : this.color
        },
        // 整体外部颜色
        styles() {
            return {
                borderColor: this.color,
                backgroundColor: this.fill ? this.color : 'white',
                color: this.fill ? 'white' : this.color,

            };
        },
        // 点的颜色
        dotStyles() {
            return {
                backgroundColor: this.fill ? 'white' : this.color,
            }
        }
    },
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-table-body {}
</style>
