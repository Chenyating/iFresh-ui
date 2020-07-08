<template>
<tbody :class="classes">
    <tr v-for="(item,index) in data" :key="index">
        <td>{{index}}</td>
        <td v-for="(titleItem,id) in title" :key="id">{{item[titleItem.key]}}
            <expendTd>
                <slot>{{titleItem.render}}</slot>
            </expendTd>
        </td>
    </tr>
</tbody>
</template>

<script>
const prefixCls = 'if-table-body'
import expendTd from './expand'
export default {
    components: {
        expendTd
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
