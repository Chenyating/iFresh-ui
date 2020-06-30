<template>
<div :class="className" @click="change">
    <slot></slot>
</div>
</template>

<script>
const preCls = `if-menu-item`
import ifIcon from '../../Icon/'
export default {
    name: 'if-menu-item',
    components: {
        ifIcon
    },
    props: {
        name: {
            type: String || Number
        },
        icon: {
            type: String,
        }
    },
    computed: {
        className() {
            return [`${preCls}`, {
                [`${preCls}-get`]: this.name == this.$parent.activeName,
            }]
        },
    },
    data() {
        return {}
    },
    methods: {
        change() {
            this.$emit('click')
            this.$parent.changeActive(this.name);
            this.$parent.ifshow = false;
            console.log('???')
        }
    },
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-menu-item {
    cursor: pointer;
    font-size: 1em;
    //文字垂直
    text-align: center;
    padding: 0.5em;
    border-top: 0;
    vertical-align: bottom;
    margin-bottom: 0;
    letter-spacing: 5px;
    font-weight: bold;
    overflow: hidden;
    writing-mode: vertical-lr;
    /*从左向右 从右向左是 writing-mode: vertical-rl;*/
    writing-mode: tb-lr;
    text-decoration: none;
    font-weight: bold;
    out-line: none;

}
</style>
