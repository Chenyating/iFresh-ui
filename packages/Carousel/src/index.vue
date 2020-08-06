<template>
<div class="if-carousel">
    <slot></slot>
</div>
</template>

<script>
const prefixCls = `if-carousel`
export default {
    name: 'if-carousel',
    data() {
        return {
            
        }
    },
    props: {
        model: {
            type: Object,
            reuqired: true
        },
        rules: {
            type: Object,
        },
        labelWidth: {
            type: Number
        }
    },
    provide() {
        return {
            formValue: this
        };
    },
    methods: {
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-carousel {
}
</style>
