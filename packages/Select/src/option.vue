<template>
<div :class="className">
    <input type="checkbox" :id="id" :checked="ifchecked" :value="currentValue" :disabled='disabled' @click.stop='clickMethod' />
    <label :for="id">
        <slot>
        </slot>
    </label>
</div>
</template>

<script>
const preCls = `if-option`
const now = Date.now();
let num = 0;
const radomName = () => {
    return `ifCheckbox_${now}_${num++}`
}
export default {
    name: 'if-option',
    props: {
        value: {
            type: [Boolean, String, Number],
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        className() {
            return [`${preCls}`, {
                [`${preCls}-disabled`]: this.disabled,
                [`${preCls}-noseeLabel`]: !this.$parent.more,
            }]
        },
        ifchecked() {
            // 判断是否为多选
            if (this.$parent.more) {
                for (let i = 0; i < this.$parent.currentValue.length; i++) {
                    if (this.$parent.currentValue[i] == (this.value ? this.value : this.label)) {
                        var params = {
                            value: this.value,
                            label: this.$slots.default[0].text
                        }
                        this.$parent.renameLabel(params) //父组件更新label名
                        return true;
                    }
                }
            } else {
                var params = {
                    value: this.value,
                    label: this.$slots.default[0].text
                }
                this.$parent.renameLabel(params) //父组件更新label名
            }
            return false;

        }
    },
    data() {
        return {
            currentValue: this.value,
            id: radomName()
        }
    },
    methods: {
        // 选中更新父显示的值
        clickMethod(e) {
            var params = {
                label: this.$slots.default[0].text,
                value: this.value
            }
            this.$parent.clickMethod(params)
        }
    },
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-option {
    display: block;
    line-height: @line-height;

    &:hover {
        background: @c-primary;

        input:checked+label:after {
            /*before为伪元素可以在元素之后添加内容*/
            color: @white;
        }
    }

    label {
        display: block;
        padding-left: @d-normal;
        cursor: pointer;
        width: 100%;

    }

    label:after {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 30px;
        height: 20px;
        line-height: 20px;
        cursor: pointer;
        /*改变复选框的边框颜色也可以不要边框*/
    }

    input[type=checkbox] {
        display: none;
    }

    input:checked+label:after {
        /*before为伪元素可以在元素之后添加内容*/
        display: inline-block;
        /*	css3中的content字符编码*/
        content: "\2713";
        /*	复选框里面的&radic;居中*/
        text-align: center;
        /*	复选框里面的&radic;大小*/
        font-size: 20px;
        /*	字体的颜色*/
        color: @c-primary;
        /*  复选框勾选后的背景颜色*/
    }
}

.if-option-disabled {
    background: @c-disable;

    &:hover {
        background: @c-disable;
    }

    label {
        color: @c-tip;
        cursor: not-allowed;
    }

    label:after {
        cursor: not-allowed;
        content: '';
        /*改变复选框的边框颜色也可以不要边框*/
    }

    input:checked+label:after {
        /*before为伪元素可以在元素之后添加内容*/
        color: @c-disable;
    }
}

.if-option-noseeLabel {
    label:after {
        content: '';
        /*改变复选框的边框颜色也可以不要边框*/
    }

    input:checked+label:after {
        /*before为伪元素可以在元素之后添加内容*/
        content: '';
    }
}
</style>
