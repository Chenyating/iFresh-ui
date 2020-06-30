<template>
<div :class="classes">
    <span>
        <slot></slot>
    </span>
</div>
</template>

<script>
const prefixCls = 'if-divider'
export default {
    name: 'if-divider',
    props: {
        right: {
            type: Boolean,
            default: false
        },
        left: {
            type: Boolean,
            default: false
        },
        dashed: {
            type: Boolean,
            default: false
        },
        vertical: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        classes() {
            return [`${prefixCls}`, {
                [`${prefixCls}-auto`]: !this.right && !this.left,
                [`${prefixCls}-right`]: this.right && !this.left,
                [`${prefixCls}-left`]: !this.right && this.left,
                [`${prefixCls}-dashed`]: this.dashed,
                [`${prefixCls}-vertical`]: this.vertical,
                [`${prefixCls}-vertical-dashed`]: this.vertical&&this.dashed,
            }];
        }
    },
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-divider {
    position: relative;
    display: flex;
    align-items: center;
    margin: @d-normal @d-mini;

    &::before {
        font-size: 0;
        content: "";
        display: block;
        width: 100%;
        border-top: solid 1px @c-primary;
        position: absolute;
    }

    span {
        display: inline-block;
        padding: 0 @d-mini;
        .t-content();
        background: @white;
        position: relative;
    }
}

.if-divider-auto {
    justify-content: center;

    span {
        left: 0;
        right: 0;
    }
}

.if-divider-right {
    height: @line-height;

    span {
        right: @d-normal;
        position: absolute;
    }
}

.if-divider-left {
    span {
        left: @d-normal;
    }
}

// 样式
.if-divider-dashed {
    &::before {
        border-top: dashed 2px @c-primary;
        height: 0;
    }
}

.if-divider-vertical {
    height: 100%;
    // min-height: @line-height;
    display: inline-block;
    vertical-align: middle;
    margin: 0 @d-mini;
    &::before {
        height: 100%;
        width: 0;
        border-left: solid 1px @c-primary;
    }
}
.if-divider-vertical-dashed {
    &::before {
        border-left: dashed 1px @c-primary;
    }
}
</style>
