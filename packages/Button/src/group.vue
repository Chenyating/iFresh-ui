<template>
<div class="if-btn-group">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'if-button-group',
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

// 基础配置
.if-btn-group {
    .t-content();
    display: inline-block;
    border-radius: @border-radius;
    text-align: center;
    cursor: pointer;
    vertical-align: middle;
    display: inline-flex;
    div+div{
        border-radius: 0;
        border-left: 0;
    }
    div:first-of-type {
        border-radius: 0;
        border-top-left-radius: @border-radius;
        border-bottom-left-radius: @border-radius;
    }
    div:last-of-type {
        border-left: 0;
        border-radius: 0;
        border-top-right-radius: @border-radius;
        border-bottom-right-radius: @border-radius;
    }

}
</style>
