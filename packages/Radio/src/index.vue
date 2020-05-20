<template>
<div :class="className">
    <input type="radio" :name='radioGroupName' :value="currentValue" :disabled='disabled' @focus='focusMethod' @blur='blurMethod' @change='changeMethod' />
    <slot>{{label}}</slot>
</div>
</template>

<script>
import ifIcon from '../../Icon/src/index.vue'
import ifButton from '../../Button/src/index.vue'
const preCls = `if-radio`

export default {
    components: {
        ifIcon,
        ifButton
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
    },
    computed: {
        className() {
            return [`${preCls}`, {
                [`${preCls}-textarea`]: this.type == 'textarea',
            }]
        },
        radioGroupName() {
            if (this.$parent.radioGroupName) {
                return this.$parent.radioGroupName;
            }
            return this.name;
        }
    },
    data() {
        return {
            currentValue: this.value,
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
                this.$parent.changeMethod(this.label)
            } else {
                this.currentValue = this.label;
                this.$emit('change', this.currentValue);
                this.$emit('input', this.currentValue);
            }
        },
        // 7、当input失去焦点时触发，注意：这个事件触发的前提是已经获取了焦点再失去焦点的时候会触发相应的js6
        blurMethod(e) {
            this.$emit('blur', e)
        }
    },
    mounted() {},
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-radio {}
</style>
