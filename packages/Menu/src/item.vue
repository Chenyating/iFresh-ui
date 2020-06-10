<template>
<router-link :class="className" to="/foo">
    <slot></slot>
</router-link>
</template>

<script>
const preCls = `if-menu-item`
export default {
    name: 'if-menu-item',
    props: {},
    computed: {
        className() {
            return [`${preCls}`, {
                [`${preCls}-disabled`]: this.disabled,
                [`${preCls}-noseeLabel`]: !this.$parent.more,
            }]
        },
    },
    data() {
        return {}
    },
    methods: {},
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-menu-item {
    .t-main();
    &:hover{
        border-bottom: 2px solid @c-primary;
    }
}
</style>
