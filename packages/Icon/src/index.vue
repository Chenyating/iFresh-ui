<template>
<div class="if-icon" :class="classes" @click="$emit('click')">
    <svg class="beRorate" viewBox="0 0 1024 1024" :width="size" :height="iconSize">
        <path v-for="(item,index) in iconName" :d='item' :key="index" :fill="color"></path>
    </svg>
</div>
</template>

<script>
import icons from './svg.js'
export default {
    name: 'if-icon',
    props: {
        color: {
            type: String,
            default: '#c4deaa'
        },
        size: {
            type: String,
            default: '50'
        },
        type: {
            type: String,
            default: 'fish'
        }
    },
    computed: {
        iconSize() {
            return Number(this.size)
        },
        classes() {
            return [{
                [`rotate`]: this.type == 'loading',
                // [`${prefixCls}-${this.type}`]: !!this.type,
                // [`${prefixCls}-${this.type}-${this.align}`]: !!this.align,
                // [`${prefixCls}-${this.type}-${this.justify}`]: !!this.justify,
                // [`${this.className}`]: !!this.className
            }];
        },
        styles() {
            let style = {};
            if (this.type == 'loading') {
                style = {
                    animation: `rotate 1s linear infinite`,
                };
            }
            return style;
        },
        iconName() {
            return icons[this.type]
        }
    },
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-icon {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    margin: 0 @d-mini;
}
</style>
