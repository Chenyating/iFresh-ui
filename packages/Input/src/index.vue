<template>
<div :class="className">
    <div class="pre-input">
        <slot name="preIcon"></slot>
        <if-icon v-if="icon" :color="iconColor" :type="icon" size="20" />
    </div>
    <input :value="currentValue" :maxlength="maxlength" :disabled='disabled' :placeholder='placeholder' @input='inputMethod' @focus='focusMethod' @blur='blurMethod' @change='changeMethod' @keydown='keydownMethod' @keyup='keyupMethod' @click='clickMethod' @select='selectMethod' />
    <slot name="nextIcon"></slot>
    <div class="next-input">
        <if-icon @click="clear" v-show="ifShowClearIcon" color="#c5c8ce" type="close" size="20" />
        <span v-if="maxlength" class="t-tip">{{nowLength}}</span>
    </div>
</div>
</template>

<script>
import ifIcon from '../../Icon/src/index.vue'
import ifButton from '../../Button/src/index.vue'
const preCls = `if-input`

export default {
    components: {
        ifIcon,
        ifButton
    },
    name: 'if-input',
    props: {
        type: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        iconColor: {
            type: String,
            default: '#afcd50'
        },
        placeholder: {
            type: String,
            default: '请输入内容'
        },
        clearable: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        maxlength: {
            type: String,
            default: ''
        }
    },
    computed: {
        className() {
            return [`${preCls}`, {
                [`${preCls}-disabled`]: this.disabled,
                [`${preCls}-rightPadding`]: this.clearable || this.maxlength,
            }]
        },
        ifShowClearIcon() {
            if (this.currentValue != '' && this.clearable) {
                return true;
            } else {
                return false;
            }
        },
        nowLength() {
            return `${this.currentValue.length}/${this.maxlength}`
        }
    },
    data() {
        return {
            currentValue: this.value,
        }
    },
    methods: {
        clear() {
            this.currentValue = ''
            this.$emit('input', this.currentValue)
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
            this.$emit('input', this.currentValue);
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
    border: 0;
    padding: 0 @d-mini;
    border-radius: @border-radius;

    &:focus {
        outline: 0;
    }
}

.if-input {
    .border-all();
    position: relative;
    display: inline-flex;
    border-radius: @border-radius;
    vertical-align: middle;

    &:hover {
        border-radius: 5px;
        display: inline-flex;
        .border-shadow(@c-primary)
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
}

.if-input-disabled {
    cursor: not-allowed;
    background: @c-disable;
}

.if-input-rightPadding {
    padding-right: 35px;
}

.pre-input {
    display: flex;
    align-items: center;
}

.next-input {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;

    span {
        margin-right: @d-mini;
    }
}
</style>
