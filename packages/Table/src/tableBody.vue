<template>
    <tbody :class="classes">
        <tr v-for="(item,index) in data" :key="index">
            <td v-for="(titleItem,id) in title" :key="id">{{item[titleItem.key]}}</td>
        </tr>
    </tbody>
</template>

<script>
const prefixCls = 'if-table-body'

export default {
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

.if-table-body {
    display: block;
    width: 100%;
}
</style>