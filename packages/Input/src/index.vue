<template>
<div class="if-input">
    <input :placeholder='placeholder' />
</div>
</template>

<script>
export default {
    name: 'if-input',
    props: {
        placeholder: {
            type: String,
            default: '请输入内容丫'
        }
    },
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-input {
    input {
        .t-content();
        list-style: none;
        padding: @d-mini;
    }
}
</style>
