<template>
<div :class="className">
    <input :value="this.value" oninput="value=value.replace(/[^\d]/g,'')" :autofocus="autofocus" :readonly='readonly' :maxlength="maxlength" :disabled='disabled' :placeholder='placeholder' @input='inputMethod' @focus='focusMethod' @blur='blurMethod' @change='changeMethod' @keydown='keydownMethod' @keyup='keyupMethod' @click='clickMethod' @select='selectMethod' />
</div>
</template>

<script>
const preCls = `if-number`
export default {
    name: 'if-number',
    props: {
        value: {
            type: [
                String,
                Number
            ],
            default: ''
        },
        placeholder: {
            type: String,
            default: '请输入数字'
        },
        readonly: {
            type: Boolean,
            default: false
        },
        autofocus: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        maxlength: {
            type: String,
            default: ''
        },
    },
    computed: {
        className() {
            return [`${preCls}`, {
                [`${preCls}-disabled`]: this.disabled
            }]
        },
    },
    watch: {
        value(newValue, oldVale) {
            this.currentValue = newValue;
        }
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    methods: {
        clear() {
            this.$emit('input', Number(this.currentValue))
        },
        // 当input 获取到焦点时触发,最先触发1
        focusMethod(e) {
            this.$emit('focus', e)
        },
        // 主要是用于 input type=button，当被点击时触发此事件2
        clickMethod(e) {
            this.$emit('click', e)
        },
        // input输入文字3、
        keydownMethod(e) {
            this.$emit('keydown', e)
        },
        // 当input的value值发生变化时就会触发，不用等到失去焦点4
        inputMethod(e) {
            this.currentValue = e.target.value;
            if (this.readonly) {
                this.$emit('input', Number(this.currentValue))
            } else {
                this.$emit('input', Number(this.currentValue))
            }
        },
        // 5、完成输入，在此事件触发之前一定触发了onkeydown事件5
        keyupMethod(e) {
            this.$emit('keyup', e)
        },
        // 6、离开input时，且表单的value发生变化触发，没有发生变化就不触发；
        changeMethod(e) {
            this.$emit('change', e)
        },
        // 7、当input失去焦点时触发，注意：这个事件触发的前提是已经获取了焦点再失去焦点的时候会触发相应的js6
        blurMethod(e) {
            this.$emit('blur', e)
        },
        // 8、表单选中内部内容触发
        selectMethod(e) {
            this.$emit('select', e)
        },

    },
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

input {
    .t-content();
    font-family: 'n-txt';
    border: 0;
    box-sizing: border-box;
    border-radius: @border-radius;
    width: 95%;
    box-sizing: content-box;
    display: inline-block;

    &:focus {
        outline: 0;
    }
}

.if-number {
    .border-all();
    box-sizing: border-box;
    position: relative;
    display: inline-flex;
    border-radius: @border-radius;
    vertical-align: middle;
    padding: 0 @d-mini;

    &:hover {
        border-radius: 5px;
        display: inline-flex;
        .border-shadow(@c-primary)
    }

    &:focus {
        background: red;
    }

    ::-webkit-input-placeholder {
        /*Chrome/Safari*/
        font-family: 'l-txt';
        color: @c-tip;
    }

    ::-moz-placeholder {
        /*Firefox*/
        font-family: 'l-txt';
        color: @c-tip;
    }

    ::-ms-input-placeholder {
        /*IE*/
        font-family: 'l-txt';
        color: @c-tip;
    }

    .pre-input {
        display: flex;
        align-items: center;
    }
}

.if-number-disabled {

    input,
    textarea {
        cursor: not-allowed;
    }

    background: @c-disable;
}
</style>
