<template>
<div :class="className">
    <slot></slot>
</div>
</template>

<script>
const preCls = `if-menu`
export default {
    name: 'if-menu',
    components: {},
    props: {},
    computed: {
        className() {
            return [`${preCls}`, {
                [`${preCls}-disabled`]: this.disabled,
                [`${preCls}-noseeLabel`]: !this.$parent.more,
            }]
        }
    },
    data() {
        return {

        }
    },
    methods: {}
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-menu {
    display: flex;
}
</style>
