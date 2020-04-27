<template>
<div class="if-icon" :class="type">
    <svg t="1587974356391" class="icon" viewBox="0 0 1026 1024" version="1.1" p-id="1286" width="128" height="128">
        <path d="M 942.5 788.75 c 10 -15 17.5 -28.75 26.25 -45 c 2.5 -3.75 3.75 -7.5 5 -11.25 C 980 720 985 707.5 990 695 c 2.5 -5 3.75 -10 6.25 -16.25 c 3.75 -12.5 7.5 -23.75 11.25 -36.25 c 1.25 -6.25 3.75 -11.25 5 -17.5 c 2.5 -12.5 5 -26.25 7.5 -38.75 c 1.25 -6.25 2.5 -11.25 2.5 -16.25 c 2.5 -18.75 3.75 -37.5 3.75 -57.5 c 0 -282.5 -230 -512.5 -512.5 -512.5 C 230 0 0 230 0 512.5 c 0 18.75 1.25 38.75 3.75 57.5 C 5 576.25 5 581.25 6.25 587.5 c 1.25 11.25 3.75 25 6.25 37.5 c 1.25 6.25 2.5 12.5 5 17.5 c 3.75 12.5 7.5 25 11.25 36.25 c 1.25 5 3.75 10 6.25 16.25 c 5 12.5 10 26.25 16.25 37.5 c 1.25 3.75 3.75 7.5 5 11.25 c 7.5 15 16.25 30 26.25 45 l 1.25 1.25 C 175 931.25 332.5 1023.75 512.5 1023.75 S 850 930 941.25 790 l 1.25 -1.25 Z M 512.5 245 c 103.75 0 188.75 85 188.75 188.75 c -1.25 103.75 -85 187.5 -188.75 187.5 s -188.75 -85 -188.75 -188.75 c 0 -102.5 85 -187.5 188.75 -187.5 Z M 201.25 832.5 C 255 710 376.25 628.75 512.5 628.75 S 770 710 823.75 832.5 C 742.5 911.25 632.5 958.75 512.5 958.75 c -121.25 0 -231.25 -47.5 -311.25 -126.25 Z" fill="#d81e06" p-id="1287"></path>
    </svg>
</div>
</template>

<script>
export default {
    name: 'if-icon',
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

.if-icon {
    .t-content();
    display: inline-block;
    text-align: center;
    line-height: @line-height;
    padding: 0 @d-normal;
    border-radius: @border-radius;

}

.primary {
    background: blue;
}
</style>
