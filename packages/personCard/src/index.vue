<template>
<div :class="classes">
    <ifImage class="img" fit='cover' src='https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' />
    <ifDivider v-if="name" class="person-name" dashed>{{name}}</ifDivider>
    <div class="person-content">
        <slot></slot>
    </div>
    <slot name="bottom"></slot>
</div>
</template>

<script>
import ifDivider from '../../Divider'
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
        ifImage,
        ifDivider
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
    width: 300px;
    border-radius: 10px;
    .border-all();
    .t-content();
    font-weight: lighter;
    padding: @d-mini;

    &:hover {
        .border-shadow(@c-primary);
        .border-all-c(@white);
        transition: all .2s ease-in-out;
    }

    .img {
        width: 300px;
        height: 300px;
    }

    .person-name {
        text-align: center;
        padding: @d-mini;
    }

    .person-content {
        padding: @d-normal;
        padding-top: 0;
    }

    .person-opt {
        padding: @d-normal;
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
}
</style>
