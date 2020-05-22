<template>
<div :class="className">
    <input type="checkbox" :id="id" :name='checkboxGroupName' :checked="ifchecked" :value="currentValue" :disabled='disabled' @focus='focusMethod' @blur='blurMethod' @click='clickMethod' />
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
import ifButton from '../../Button/src/index.vue'
const preCls = `if-checkbox`
const now = Date.now();
let num = 0;
const radomName = () => {
    return `ifCheckbox_${now}_${num++}`
}
export default {
    components: {
        ifIcon,
        ifButton
    },
    name: 'if-checkbox',
    props: {
        value: {
            type: [Boolean, String],
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        checked: {
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
            }]
        },
        checkboxGroupName() {
            if (this.$parent.checkboxGroupName) {
                return this.$parent.checkboxGroupName;
            }
            return this.name;
        },
        ifchecked() {
            // 判断是否为checkbox组
            if (this.$parent.currentValue instanceof Array) {
                for (let i = 0; i < this.$parent.currentValue.length; i++) {
                    if (this.$parent.currentValue[i] == (this.value ? this.value : this.label)) {
                        return true;
                    }
                }
            } else {
                if (typeof (this.value) == 'boolean') {
                    return this.value ? this.value : !this.value;
                } else {
                    if (this.value == this.label)
                        return true;
                }
                return false;
            }

        }
    },
    data() {
        return {
            currentValue: this.value,
            checklist: [],
            id: radomName()
        }
    },
    methods: {
        // 当input 获取到焦点时触发,最先触发1
        focusMethod(e) {
            this.$emit('focus', e)
        },
        // 主要是用于 input type=button，当被点击时触发此事件2
        clickMethod(e) {
            // 判断是否checkbox组
            if (this.$parent.checkboxGroupName) {
                if (this.value) {
                    this.$parent.clickMethod(this.value)
                } else {
                    this.$parent.clickMethod(this.label)
                }
            } else {
                if (typeof (this.currentValue) === 'boolean') {
                    this.currentValue = !this.currentValue;
                } else {
                    this.currentValue = this.value;
                }
                this.$emit('click', this.currentValue);
                this.$emit('input', this.currentValue);
            }
        },
        // 7、当input失去焦点时触发，注意：这个事件触发的前提是已经获取了焦点再失去焦点的时候会触发相应的js6
        blurMethod(e) {
            this.$emit('blur', e);
        }
    },
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-checkbox {
    display: inline-block;
    margin-right: @d-mini;
    line-height: @d-middle;

    label {
        cursor: pointer;

        span {
            padding-left: @d-mini;
        }
    }

    label:before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 30px;
        height: 20px;
        background: @white;
        line-height: 20px;
        cursor: pointer;
        /*改变复选框的边框颜色也可以不要边框*/
        border: solid 2px @c-primary;
        border-top: 0;
        border-bottom: 0;
        border-radius: 20px;
    }

    input[type=checkbox] {
        display: none;
    }

    input:checked+label:before {
        /*before为伪元素可以在元素之后添加内容*/
        display: inline-block;
        /*	css3中的content字符编码*/
        content: "\2618";
        /*	复选框里面的&radic;居中*/
        text-align: center;
        /*	复选框里面的&radic;大小*/
        font-size: 20px;
        /*	字体的颜色*/
        color: @c-primary;
        /*  复选框勾选后的背景颜色*/
    }
}

.if-checkbox-disabled {
    color: @c-disable;

    label {
        color: @c-disable;
        cursor: not-allowed;
    }

    label:before {
        cursor: not-allowed;
        content: '';
        /*改变复选框的边框颜色也可以不要边框*/
        border: solid 2px @c-disable;
        border-top: 0;
        border-bottom: 0;
        border-radius: 20px;
    }

    input:checked+label:before {
        /*before为伪元素可以在元素之后添加内容*/
        color: @c-disable;
    }
}
</style>
