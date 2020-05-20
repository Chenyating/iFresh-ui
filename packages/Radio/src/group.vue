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
    return `ifRadio_${now}_${num}`
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
        }
    },
    computed: {
        className() {
            return [`${preCls}`, {
                [`${preCls}-textarea`]: this.type == 'textarea',
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
        // 当input 获取到焦点时触发,最先触发1
        focusMethod(e) {
            this.$emit('focus', e)
        },
        // 主要是用于 input type=button，当被点击时触发此事件2
        changeMethod(value) {
            this.$emit('change', value)
            this.$emit('input', value);
        },
        // 7、当input失去焦点时触发，注意：这个事件触发的前提是已经获取了焦点再失去焦点的时候会触发相应的js6
        blurMethod(e) {
            this.$emit('blur', e)
        }
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';
</style>
