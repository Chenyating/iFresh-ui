<template>
<thead :class="classes">
    <tr>
        <th>序号</th>
        <th v-for="(item,index) in title" :key="index">{{item.title}}</th>
    </tr>
</thead>
</template>

<script>
export default {
    props: {
        title: {
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

.if-table {}
</style>
