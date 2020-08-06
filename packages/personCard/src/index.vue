<template>
<div class="if-personCard-box">
</div>
</template>

<script>
const prefixCls = 'if-personCard'
export default {
    name: 'if-personCard',
    props: {},
    data() {
        return {}
    },
    computed: {
        classes() {
            return [`${prefixCls}`, {}];
        },
        styles() {
            let style = {};
            style = {
                objectFit: this.fit,
                borderRadius: this.round ? '100%' : '0',
            };
            return style;
        }
    },
    methods: {}
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-personCard-box {
    width: 375px;
    background: #e8ece3;
}
</style>
