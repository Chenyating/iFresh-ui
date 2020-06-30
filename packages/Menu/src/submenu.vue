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
    cursor: pointer;
    font-size: 1em;
    //文字垂直
    text-align: center;
    padding: 0.5em;
    border-top: 0;
    vertical-align: bottom;
    margin-bottom: 0;
    letter-spacing: 5px;
    font-weight: bold;
    overflow: hidden;
    writing-mode: vertical-lr;
    /*从左向右 从右向左是 writing-mode: vertical-rl;*/
    writing-mode: tb-lr;
    text-decoration: none;
    font-weight: bold;
    out-line: none;
}

.menu-item-box {
    position: absolute;
    top: 60px;
    background: pink;
}
</style>
