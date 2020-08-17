<template>
<div :class="classes" @click="clickMethod">
    <slot></slot>
</div>
</template>

<script>
const prefixCls='if-card'
export default {
    name: 'if-card',
    props: {
        type: String
    },
    computed: {
        classes() {
            return [`${prefixCls}`,{
                [`${prefixCls}`]: !this.type,
                [`${prefixCls}-${this.type}`]: !!this.type,
                [`${prefixCls}-${this.type}-${this.align}`]: !!this.align,
                [`${prefixCls}-${this.type}-${this.justify}`]: !!this.justify,
                [`${this.className}`]: !!this.className
            }];
        },
        styles() {
            let style = {};
            if (this.gutter !== 0) {
                style = {
                    marginLeft: this.gutter / -2 + 'px',
                    marginRight: this.gutter / -2 + 'px'
                };
            }
            return style;
        }
    },
    methods:{
        clickMethod(){
            this.$emit('click')
        }
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-card {
    .border-all();
    padding: @d-normal;
    border-radius: 10px;
    box-sizing: border-box;

    &:hover {
        .border-shadow(@c-primary);
        transition: all .2s ease-in-out;
    }
}

.primary {
    background: blue;
}
</style>
