<template>
<div class="if-page" :class="classes">
    <div class="page-item">
        <if-icon type='left' size="25" />
    </div>
    <div class="page-item" v-for="i in 9" :key="i">{{i}}</div>
    <div class="page-item">
        <if-icon type='right' size="25" />
    </div>
</div>
</template>

<script>
import ifIcon from '../../Icon/src/index.vue'
export default {
    name: 'if-page',
    components: {
        ifIcon
    },
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
        iconSize() {},
        classes() {
            return [{
                [`rotate`]: this.type == 'loading',
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
    },
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';
.if-page{
    display: flex;
}
.page-item{
    display: inline-block;
    text-align: center;
    line-height: 30px;
    .border-all();
    .s-square(30px);
    border-radius: @border-radius;
    margin: @d-mini;
}
</style>
