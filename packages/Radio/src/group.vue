<template>
<div :class="className">
    <slot></slot>
</div>
</template>

<script>
const preCls = `if-radio-group`
const now = Date.now();
let num = 0;
const radomName = () => {
    return `ifRadio_${now}_${num++}`
}
export default {
    name: 'if-radio-group',
    props: {
        value: {
            type: [Boolean, String],
            default: ''
        },
        name: {
            type: String,
            default: radomName
        },
        type: {
            type: String,
            default: ''
        },
    },
    computed: {
        className() {
            return [`${preCls}`, {
                [`${preCls}-button`]: this.type == 'button',
            }]
        },
    },
    data() {
        return {
            currentValue: this.value,
            radioGroupName: this.name
        }
    },
    methods: {
        // 主要是用于 input type=button，当被点击时触发此事件2
        changeMethod(value) {
            this.$emit('change', value)
            this.$emit('input', value);
            this.$parent.$emit('validate')

        }
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

// 基础配置
.if-radio-group-button {
    display: inline-block;
    border-radius: @border-radius;
    text-align: center;
    cursor: pointer;
    vertical-align: middle;
    display: inline-flex;

    div+div {
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
