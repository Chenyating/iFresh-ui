<template>
<div :class="className">
    <input type="radio" :id="id" :name='radioGroupName' :checked="checked" :value="currentValue" :disabled='disabled' @focus='focusMethod' @blur='blurMethod' @change='changeMethod' />
    <label :for="id">
        <span>
            <slot>
                <if-icon v-if="icon" :color="iconColor" :type="icon" size="20" />
                {{label}}
            </slot>
        </span>
    </label>
</div>
</template>

<script>
import ifIcon from '../../Icon/src/index.vue'
const preCls = `if-radio`
const now = Date.now();
let num = 0;
const radomName = () => {
    return `ifRadio_${now}_${num++}`
}
export default {
    components: {
        ifIcon
    },
    name: 'if-radio',
    props: {
        value: {
            type: [Boolean, String, Number],
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            required: true
        },
        name: {
            type: String,
        },
        icon: {
            type: String,
            default: ''
        },
        iconColor: {
            type: String,
            default: '#afcd50'
        },
    },
    computed: {
        className() {
            return [`${preCls}`, {
                [`${preCls}-disabled`]: this.disabled,
                [`${preCls}-button`]: this.$parent.type == 'button',
                [`${preCls}-button-disabled`]: this.$parent.type == 'button' && this.disabled,
            }]
        },
        radioGroupName() {
            if (this.$parent.radioGroupName) {
                return this.$parent.radioGroupName;
            }
            return this.name;
        },
        checked() {
            // 先判断是否存在value。再判断其类型；
            if (this.value) {
                if (typeof (this.value) == 'boolean') {
                    return this.value;
                }
                if (this.$parent.currentValue == this.value) {
                    return true
                }
                return false;
            } else {
                if (this.$parent.currentValue == this.label) {
                    return true
                }
            }
        }
    },
    data() {
        return {
            currentValue: this.value,
            id: radomName()
        }
    },
    methods: {
        // 当input 获取到焦点时触发,最先触发1
        focusMethod(e) {
            this.$emit('focus', e)
        },
        // 主要是用于 input type=button，当被点击时触发此事件2
        changeMethod(e) {
            // this.$emit('change', e)
            if (this.$parent.radioGroupName) {
                if (this.value) {
                    this.$parent.changeMethod(this.value)
                } else {
                    this.$parent.changeMethod(this.label)
                }
            } else {
                if (typeof (this.currentValue) == 'boolean') {
                    this.currentValue = !this.currentValue;
                } else {
                    this.currentValue = this.value;
                }
                this.$emit('change', this.currentValue);
                this.$emit('input', this.currentValue);
            }
        },
        // 7、当input失去焦点时触发，注意：这个事件触发的前提是已经获取了焦点再失去焦点的时候会触发相应的js6
        blurMethod(e) {
            this.$emit('blur', e)
        }
    },
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-radio {
    display: inline-block;
    padding-right: @d-mini;
    line-height: @d-middle;

    label {
        cursor: pointer;

        span {
            padding-left: @d-mini;
        }
    }

    label:before {
        content: '\2661';
        display: inline-block;
        vertical-align: middle;
        background: @white;
        line-height: 20px;
        font-size: 20px;
        cursor: pointer;
        color: @c-light-primary;

        /*改变复选框的边框颜色也可以不要边框*/
    }

    input[type=radio] {
        display: none;
    }

    input:checked+label:before {
        /*before为伪元素可以在元素之后添加内容*/
        display: inline-block;
        /*	css3中的content字符编码*/
        content: "\2665";
        /*	复选框里面的&radic;居中*/
        text-align: center;
        /*	复选框里面的&radic;大小*/
        font-size: 20px;
        /*	字体的颜色*/
        color: @c-primary;
        /*  复选框勾选后的背景颜色*/
        .text-shadow(@c-primary)
    }
}

.if-radio-button {
    .border-all();

    label {
        padding: 0 @d-mini;

        span {
            padding-right: @d-mini;
        }
    }

    label:before {
        content: '';
    }

    input:checked+label:before {
        content: '';
        .text-shadow(@c-primary)
        /*before为伪元素可以在元素之后添加内容*/
    }

    input:checked+label {
        content: '';
        color: @c-primary;
        /*before为伪元素可以在元素之后添加内容*/
    }
}

.if-radio-button-disabled {
    .border-all-c(@c-disable);
    background: @c-disable;
    label {
        padding: 0 @d-mini;

        span {
            color: @c-tip  !important;
            padding-right: @d-mini;
        }
    }

    label:before {
        content: '';
    }

    input:checked+label:before {
        content: '';
        .text-shadow(@c-primary)
        /*before为伪元素可以在元素之后添加内容*/
    }

    input:checked+label {
        content: '';
        color: @c-primary;
        /*before为伪元素可以在元素之后添加内容*/
    }
}

.if-radio-disabled {
    color: @c-disable;

    label {
        color: @c-disable;
        cursor: not-allowed;
    }

    label:before {
        cursor: not-allowed;
        /*改变复选框的边框颜色也可以不要边框*/
        color: @c-disable;
    }

    input:checked+label:before {
        /*before为伪元素可以在元素之后添加内容*/
        color: @c-disable;
    }
}
</style>
