<template>
<div class="if-button" :class="type">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'if-button',
    props: {
        type: {
            type: String,
        }
    },
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-button {
    .t-content();
    .border-all();
    display: inline-block;
    text-align: center;
    line-height: @line-height;
    padding: 0 @d-normal;
    border-radius: @border-radius;
    background: @white;
    cursor: pointer;

    &:hover {
        opacity: .9;
    }
}

.primary {
    .border-all-c(@c-primary);
    border: none;
    background: @c-primary;
    color: @white;
}

.dashed {
    .border-all-dashed();
}

.info {
    background: @c-info;
    .border-all-c(@c-info);
    color: @white;
}

.success {
    background: @c-success;
    .border-all-c(@c-success);
    color: @white;
}

.warning {
    background: @c-warning;
    .border-all-c(@c-warning);
    color: @white;
}

.error {
    background: @c-error;
    .border-all-c(@c-error);
    color: @white;
}
</style>
