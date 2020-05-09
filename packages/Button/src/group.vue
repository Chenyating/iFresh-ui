<template>
<div :class="className">
    <!-- <div class="flex-center"> -->
    <!-- <Icon size='20' v-if="icon&&!right" :type='icon' :color='iconColor'/> -->
    <slot></slot>
    <!-- <Icon size='20' v-if="icon&&right" :type='icon' :color='iconColor'/> -->
    <!-- </div> -->
</div>
</template>

<script>
import Icon from '../../Icon/src/index.vue'
const preCls = `if-btn-group`
export default {
    name: 'if-button-group',
    components: {
        Icon
    },
    props: {
        iconColor: {
            type: String,
            default: '#afcd50'
        },
        type: {
            type: String,
            default: 'default'
        },
        ghost: {
            type: Boolean,
            default: false
        },
        disable: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ''
        },
        right: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        className() {
            return [`${preCls}`, {
                [`${preCls}-${this.type}-ghost`]: this.ghost,
                [`${preCls}-disable`]: this.disable,
            }]
        }
    },
    mounted() {}
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

// 基础配置
.if-btn-group {
    .t-content();
    display: inline-block;
    border-radius: @border-radius;
    text-align: center;
    cursor: pointer;
    vertical-align: middle;
    display: inline-flex;
    div+div{
        border-radius: 0;
        border-left: 0;
    }
    div:first-of-type {
        border-radius: 0;
        border-top-left-radius: @border-radius;
        border-bottom-left-radius: @border-radius;
    }
    div:last-of-type {
        border-left: 0;
        border-radius: 0;
        border-top-right-radius: @border-radius;
        border-bottom-right-radius: @border-radius;
    }

}
</style>
