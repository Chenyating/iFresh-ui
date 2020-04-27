<template>
<span class="if-card" :class="type">
    <slot></slot>
</span>
</template>

<script>
export default {
    name: 'if-card',
    props: {
        type: String
    },
    computed: {
        classes() {
            return [{
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
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-card {
    .border-all();
    padding: @d-big;
    border-radius: 10px;

    &:hover {
        .border-shadow(@c-primary);
    }
}

.primary {
    background: blue;
}
</style>
