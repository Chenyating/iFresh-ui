<template>
<div class="if-gallery" :style="styles">
    <slot />
</div>
</template>

<script>
const preCls = `if-gallery`

export default {
    name: 'if-gallery',
    props: {
        gap: {
            type: Number,
            default: 10
        }
    },
    computed: {
        // 整体外部颜色
        styles() {
            let style = {};
            style = {
                gridGap:`${this.gap}px`
            }
            return style;
        },
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-gallery {
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fit, minmax(20%,100%));
    grid-template-rows: repeat(auto-fit, 1fr);

    &-item {
        .border-all();
        &:nth-child(2n) {
            grid-column: span 2;
            grid-row: span 2;
        }
    }
}
</style>
