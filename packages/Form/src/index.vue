<template>
<div class="if-form">
    <slot></slot>
</div>
</template>

<script>
const prefixCls = `if-timeAxis`
export default {
    name: 'if-form',
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
        validate(cb) {
            // 全局校验
            // 获取校验项
            const tasks = this.$children.filter(item => item.prop).map(item => item.validate());
            Promise.all(tasks).then(() => cb(true)).catch(() => cb(false))
        },
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-form {
    outline: 0;
}
</style>
