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
    },
    computed: {
        classes() {
            return [`${prefixCls}`, {
                [`${prefixCls}-auto`]: !this.right && !this.left,
                [`${prefixCls}-right`]: this.right && !this.left,
                [`${prefixCls}-left`]: !this.right && this.left,
            }];
        },
        styles() {
            let style = {};
            if (this.gutter !== 0) {
                style = {
                    marginLeft: this.gutter / -2 + 'px',
                    marginRight: this.gutter / -2 + 'px'
                };
            }
            return style;
        }
    },
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-divider {
    position: relative;
    height: @line-height;
}

.if-divider-auto {
    text-align: center;

    span {
        right: 0;
        padding: @d-mini;
        background: @white;
        margin: 0 @d-normal;
        .t-content();

        &::before {
            content: "";
            display: block;
            width: 50%;
            height: 1px;
            background: @c-primary;
            position: absolute;
            top: 16px;
            left: 0;
            z-index: 1;
        }

        &::after {
            content: "";
            display: block;
            width: 50%;
            height: 1px;
            background: @c-primary;
            position: absolute;
            top: 16px;
            right: 0;
            z-index: 1;
        }
    }
}

.if-divider-right {
    position: relative;

    &::before {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: @c-primary;
        position: absolute;
        top: 20px;
        left: 0;
    }

    span {
        position: absolute;
        right: 0;
        padding: @d-mini;
        background: @white;
        margin: 0 @d-normal;
        .t-content();
    }
}

.if-divider-left {
    position: relative;

    &::before {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: @c-primary;
        position: absolute;
        top: 20px;
        left: 0;
    }

    span {
        position: absolute;
        left: 0;
        padding: @d-mini;
        background: @white;
        margin: 0 @d-normal;
        .t-content();
    }
}
</style>
