<template>
<div :class="className">
    <div>
        <slot name="icon"></slot>
        <slot></slot>
    </div>
</div>
</template>

<script>
const preCls = `if-btn`
export default {
    name: 'if-button',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        ghost: {
            type: Boolean,
            default: false
        },
        disable: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        className() {
            return [`${preCls}-${this.type}`, {
                [`${preCls}-${this.type}-ghost`]: this.ghost,
                [`${preCls}-disable`]: this.disable,
            }]
        }
    },
    mounted() {}
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

// 基础配置
.btn {
    .t-content();
    .border-all();
    display: inline-block;
    text-align: center;
    padding: 0 @d-normal;
    border-radius: @border-radius;
    cursor: pointer;
}

.if-btn(@textColor, @borderColor, @bgColor) {
    .btn();
    .border-all-c(@borderColor);
    background: @bgColor;
    color: @textColor;

    &:hover {
        opacity: .8;
        .border-shadow(@borderColor)
    }
}

// 默认设置
.if-btn-default {
    .if-btn(@c-content, @c-primary, @white);
}

.if-btn-primary {
    .if-btn(@white, @white, @c-primary);
    .border-shadow(@c-primary)
}

.if-btn-dashed {
    .if-btn(@c-primary, @c-primary, @white);
    .border-all-dashed();

}

.if-btn-info {
    .if-btn(@white, @c-info, @c-info);

}

.if-btn-success {
    .if-btn(@white, @c-success, @c-success);

}

.if-btn-warning {
    .if-btn(@white, @c-warning, @c-warning);

}

.if-btn-error {
    .if-btn(@white, @c-error, @c-error);

}

// 幽灵设置

.btn-ghost {
    background: transparent;

    &:hover {
        background: #ffffff6b;
        font-weight: bold;
    }
}

.if-btn-ghost(@color) {
    .btn-ghost();
    .border-all-c(@color);
    color: @color;
}

.if-btn-default-ghost {
    .if-btn-ghost(@c-content);

    &:hover {
        .border-shadow(@c-content)
    }
}

.if-btn-primary-ghost {
    .if-btn-ghost(@c-primary);

}

.if-btn-dashed-ghost {
    .if-btn-ghost(@c-primary);
    .border-all-dashed();

}

.if-btn-info-ghost {
    .if-btn-ghost(@c-info);

}

.if-btn-success-ghost {
    .if-btn-ghost(@c-success);

}

.if-btn-warning-ghost {
    .if-btn-ghost(@c-warning);

}

.if-btn-error-ghost {
    .if-btn-ghost(@c-error);

}

// 禁用模式
.if-btn-disable {
    background: #f1f2f4;
    color: @c-disable;
    cursor: not-allowed;
    box-shadow: none;

    &:hover {
        box-shadow: none;
        opacity: 1 !important;
        background: #f1f2f4;
        font-weight: normal;
    }
}
</style>
