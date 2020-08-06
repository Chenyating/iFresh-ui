<template>
<div class="if-carousel-item">
    <slot></slot>
</div>
</template>

<script>
import schema from 'async-validator'
export default {
    name: 'if-carousel-item',
    data() {
        return {
            
        }
    },
    props: {
        prop: {
            type: String
        },
        label: {
            type: String
        },
    },
    computed: {
        className() {
            return [`label-text`, {
                [`label-text-required`]: this.prop ? this.formValue.rules[this.prop][0].required : false,
            }]
        },
        styles() {
            var style = {
                width: this.$parent.labelWidth + 'px',
            };
            return style;
        },
    },
    inject: ['formValue'],
    data() {
        return {
            rule: this.$parent[this.props],
            error: ''
        }
    },
    methods: {
    },
    mounted() {
        this.$on('validate', () => {
            this.validate();
        })
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-carousel-item {
  
}
</style>
