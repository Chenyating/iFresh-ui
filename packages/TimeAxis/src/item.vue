<template>
<div :class="className" @click="$emit('click')">
    <div class="item">
        <div class="item-title">{{title}}</div>
        <slot></slot>
        <div v-if="time" class="time">
            <if-Icon type='time' size='20' />{{time}}</div>
    </div>
</div>
</template>

<script>
const preCls = `if-timeAxis-item`
import ifIcon from '../../Icon'
export default {
    name: 'if-timeAxis-item',
    components: {
        ifIcon
    },
    props: {
        time: {
            type: String
        },
        title: {
            type: String
        }
    },
    computed: {
        className() {
            return [`${preCls}`, {
                [`turndown`]: this.$parent.ifshow,
                [`turnup`]: !this.$parent.ifshow,
            }]
        },
    },
    data() {
        return {}
    },
    methods: {},
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-timeAxis-item {
    box-sizing: border-box;

    .item {
        padding: @d-normal;
        padding-bottom: @d-mini;
        position: relative;
        min-height: 50px;
        .border-shadow(@c-light-primary);
        .border-all();
        .t-content();
        background: @white;
    }

    .item-title {
        .t-small();
        text-align: center;
    }

    .time {
        .t-tip();
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
}
</style>
