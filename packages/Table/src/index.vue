<template>
<table :class="classes">
    <tableHead :title="columns"></tableHead>
    <tableBody :title="columns" :data='data'></tableBody>
</table>
</template>

<script>
import ifIcon from '../../Icon/src/index.vue'
import tableHead from '../src/tableHead.vue'
import tableBody from '../src/tableBody.vue'
const prefixCls = 'if-table'
export default {
    name: 'if-table',
    components: {
        ifIcon,
        tableHead,
        tableBody
    },
    props: {
        columns: {
            type: Array,
        },
        data: {
            type: Array,
        },
    },
    computed: {
        classes() {
            return [prefixCls];
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
    data() {
        return {
            currentValue: this.data
        }
    },
    methods: {
        clickMethod(e) {
            this.showTag = false;
            this.$emit('on-close', e);
        }
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-table {
    .border-all();
    thead,tbody,tr{
        width: 100%;
    }
}
</style>
