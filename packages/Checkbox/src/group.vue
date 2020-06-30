<template>
<div :class="className">
    <slot></slot>
</div>
</template>

<script>
const preCls = `if-checkbox-group`
const now = Date.now();
let num = 0;
const radomName = () => {
    return `ifRadio_${now}_${num++}`
}
export default {
    name: 'if-checkbox-group',
    props: {
        value: {
            type: Array,
            default: []
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
    watch: {
        value: {
            handler(newVal, oldVal) {
                if(newVal==null||newVal==''){
                    this.currentValue = [];
                    this.list=[];
                }else{
                    this.currentValue = newVal;
                    this.list=newVal;
                }
            },
            deep: true
        }
    },
    data() {
        return {
            currentValue: this.value,
            checkboxGroupName: this.name,
            list: this.value
        }
    },
    methods: {
        // 主要是用于 input type=button，当被点击时触发此事件2
        CheckboxclickMethod(value) {
            var repeat = false;
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i] == value) {
                    repeat = true;
                    this.list.splice(i, 1)
                }
            }
            if (!repeat) {
                this.list.push(value);
            }
            this.$emit('click', this.list)
            this.$emit('input', this.list);
        }
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';
</style>
