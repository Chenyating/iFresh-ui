<template>
<div :class="classes" @click="$emit('click')" :style="styles" tabindex="0" v-if="showTag">
    <div v-if="dot" class="dot" :style="dotStyles"></div>
    <slot class="text"></slot>
    <if-icon v-if="closable" type='false' size='20' :color="iconColor" @click="clickMethod" />
</div>
</template>

<script>
import ifIcon from '../../Icon/src/index.vue'
const prefixCls = 'if-tag'
export default {
    name: 'if-tag',
    components: {
        ifIcon
    },
    props: {
        closable: {
            type: Boolean,
            default: false
        },
        dot: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: '#c4deaa'
        },
        fill: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classes() {
            return [prefixCls];
        },
        // 关闭颜色
        iconColor() {
            return this.fill ? 'white' : this.color
        },
        // 整体外部颜色
        styles() {
            return {
                borderColor: this.color,
                backgroundColor: this.fill ? this.color : 'white',
                color: this.fill ? 'white' : this.color,

            };
        },
        // 点的颜色
        dotStyles() {
            return {
                backgroundColor: this.fill ? 'white' : this.color,
            }
        }
    },
    data() {
        return {
            showTag: true
        }
    },
    methods: {
        clickMethod(e) {
            this.showTag = false;
            this.$emit('on-close', e);
        }
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-tag {
    display: inline-block;
    vertical-align: middle;
    padding: @d-mini @d-normal;
    border-radius: 2px;
    .border-all();
    font-size: 14px;
    outline: 0;

    &:focus {
        .border-shadow(@c-primary);
    }
}

.dot {
    .s-circular(10px);
    display: inline-block;
    margin-right: @d-mini;
}
</style>
