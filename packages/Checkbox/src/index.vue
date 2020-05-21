<template>
<div :class="className">
    <input type="checkbox" :name='checkboxGroupName' :checked="ifchecked" :value="currentValue" :disabled='disabled' @focus='focusMethod' @blur='blurMethod' @click='clickMethod' />
    {{label}}
</div>
</template>

<script>
import ifIcon from '../../Icon/src/index.vue'
import ifButton from '../../Button/src/index.vue'
const preCls = `if-checkbox`

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
        }
    },
    computed: {
        className() {
            return [`${preCls}`, {
                [`${preCls}-textarea`]: this.type == 'textarea',
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
                    if (this.$parent.currentValue[i] == this.label) {
                        return true;
                    }
                }
            } else {
                return this.currentValue;
            }

        }
    },
    data() {
        return {
            currentValue: this.value,
            checklist: []
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
                this.$parent.clickMethod(this.label)
            } else {
                this.currentValue=!this.currentValue;
                this.$emit('click', this.currentValue);
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

.if-checkbox {}
</style>
