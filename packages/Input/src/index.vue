<template>
<div class="if-input" @mouseover="showClearIcon">
    <input :placeholder='placeholder' :value="value" @input="inputMethod"/>
    <icon @click="clearTxt" v-if="value!=''&&clearable&&mouseoverShowClear" color="#c5c8ce" class="clear" type="close" size="20" />
</div>
</template>

<script>
import icon from '../../Icon/src/index.vue'
const preCls = `if-btn`

export default {
    components: {
        icon
    },
    name: 'if-input',
    props: {
        placeholder: {
            type: String,
            default: '请输入内容'
        },
        clearable: {
            type: Boolean,
            default: true
        },
        value: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            receiveValue:'',
            mouseoverShowClear:false
        }
    },
    methods: {
        emitEvery(type) {
            switch (type) {
                case 'input':

                    break;

                default:
                    return this.$emit('input', this.receiveValue);
                    break;
            }
        },
        clearTxt() {
            this.receiveValue = '';
            this.emitEvery();
        },
        inputMethod(e) {
            this.receiveValue = e.target.value;
            this.emitEvery();
        },
        showClearIcon() {
            this.mouseoverShowClear=true;
        }
    },
    computed: {
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-input {
    position: relative;
    display: inline-block;

    input {
        .t-content();
        .border-all();
        display: inline-block;
        padding: 0 @d-normal;
        border-radius: @border-radius;
        cursor: pointer;
        vertical-align: middle;

        &:focus {
            outline: solid 1px;
            outline-color: @c-primary;
            border-radius: @border-radius;
            .border-shadow(@c-primary)
        }
    }

    &:hover {
        border-radius: 5px;
        display: inline-block;
        .border-shadow(@c-primary)
    }

    ::-webkit-input-placeholder {
        /*Chrome/Safari*/
        font-family: 'l-txt';
        color: @c-disable;
    }

    ::-moz-placeholder {
        /*Firefox*/
        font-family: 'l-txt';
        color: @c-disable;
    }

    ::-ms-input-placeholder {
        /*IE*/
        font-family: 'l-txt';
        color: @c-disable;
    }
}

// 清除按钮居中
.clear {
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 9;
}
</style>
