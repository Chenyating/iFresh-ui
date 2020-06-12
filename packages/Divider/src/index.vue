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
    display: flex;
    align-items: center;
}

.if-divider-auto {
    text-align: center;
    position: relative;
    justify-content: center;
    &::before {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: @c-primary;
        position: absolute;
        left: 0;
    }

    span {
        position: relative;
        left: 0;
        right: 0;
        padding: @d-mini;
        background: @white;
        margin: 0 @d-normal;
        .t-content();
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
