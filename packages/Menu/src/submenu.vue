<template>
<div :class="className">
    <div @mouseenter="ifshow=true" @mouseleave="ifshow=false">
        <if-icon type='home' color='white' size='20' />{{title}}
    </div>
    <div @mouseenter="ifshow=true" @mouseleave="ifshow=false" class="menu-item-box">
        <slot></slot>
    </div>
</div>
</template>

<script>
const preCls = `if-submenu`
import ifIcon from '../../Icon/'
export default {
    components: {
        ifIcon
    },
    name: 'if-submenu',
    components: {},
    props: {
        active: {
            type: String || Number,
            default: '1'
        },
        mode: {
            type: String,
            default: 'horizontal'
        },
        title: {
            type: String,
            default: '标题'
        }
    },
    computed: {
        className() {
            return [`${preCls}`, {
                [`${preCls}-vertical`]: this.mode == 'vertical',
            }]
        }
    },
    data() {
        return {
            activeName: this.active,
            ifshow: false
        }
    },
    methods: {
        changeActive(name) {
            this.activeName = name;
        },
        showitembox() {
            this.ifshow = true;
        }
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-submenu {
    position: relative;
    padding: @d-normal;
    cursor: pointer;
    text-align: right !important;
    border-bottom: 2px solid @c-primary;
    border-right: 2px solid @c-primary;
    outline: 0;
}

.menu-item-box {
    position: absolute;
    top: 60px;
    background: pink;
}
</style>
