<template>
<div :class="classes">
    <ifImage src='../../../public/assets/img/aa.jpg'/>
    <ifImage src='https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'/>
    <div>{{name}}</div>
    <slot></slot>
</div>
</template>

<script>
import ifImage from '../../Image'
const prefixCls = 'if-personCard'
export default {
    name: 'if-personCard',
    props: {
        name: {
            type: String
        }
    },
    components: {
        ifImage
    },
    computed: {
        classes() {
            return [`${prefixCls}`, {
                // [`${prefixCls}`]: !this.type,
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

.if-personCard {
    display: inline-block;
    padding: @d-normal;
    border-radius: 10px;
    .border-all();
    .t-content();

    &:hover {
        .border-shadow(@c-primary);
        .border-all-c(@white);
        transition: all .2s ease-in-out;
        background: @c-primary;
        color: @white;
    }
}

.primary {
    background: blue;
}
</style>
