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
            this.$parent.ifshow=false;
            console.log('???')
        }
    },
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-menu-item {
    height: 60px;
    padding:0 @d-normal;
    cursor: pointer;
    text-align: right !important;
    border-bottom: 2px solid @c-primary;
    border-right: 2px solid @c-primary;

}
</style>
