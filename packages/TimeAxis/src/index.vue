<template>
<!-- 时间轴 -->
<div class="if-timeAxis-box">
    <if-tag dot fill v-if="title" @click="showTimeAxis" class='timeAxis-title'>{{title}}
        <if-icon class="icon" color='white' :type="ifshow?'up':'down'" size="20" />
    </if-tag>
    <div class="if-timeAxis">
        <slot v-if="ifshow"></slot>
    </div>
</div>
</template>

<script>
import ifTag from '../../Tag'
import ifIcon from '../../Icon'
const preCls = `if-timeAxis`
export default {
    name: 'if-timeAxis',
    components: {
        ifTag,
        ifIcon
    },
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            ifshow: true
        }
    },
    methods: {
        showTimeAxis() {
            this.ifshow = !this.ifshow;
        }
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-timeAxis-box {
    position: relative;
    overflow: hidden;

    .timeAxis-title {
        position: absolute;
        right: 0;
        left: 0;
        margin: 0 auto;
        z-index: 2;
        width: 100px;
    }
}

.if-timeAxis {
    margin: 0 auto;
    min-height: 30px;
    padding-top: @d-big;

    &::after {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 3px;
        margin-left: -1px;
        background: @c-primary;
    }

    .if-timeAxis-item:nth-child(odd) {
        float: left;
        padding-top: 10px;
        clear: both;
        position: relative;
        width: 50%;
        display: block;
        padding-right: 40px;

        &::after {
            top: 30px;
            right: -10px;
            content: '';
            display: block;
            width: 16px;
            height: 16px;
            border-radius: 10px;
            background: @c-success;
            border: solid 2px #ffffff;
            position: absolute;
            z-index: 1;
        }

        &::before {
            content: "";
            display: block;
            width: 0;
            height: 0;
            border: 10px solid transparent;
            border-left-color: @c-success;
            top: 30px;
            right: 20px;
            position: absolute;
            z-index: 1;
        }
    }

    .if-timeAxis-item:nth-child(even) {
        float: right;
        margin-top: 40px;
        position: relative;
        width: 50%;
        display: block;
        padding-left: 40px;

        &::after {
            top: 20px;
            left: -8px;
            content: '';
            display: block;
            width: 12px;
            height: 12px;
            border-radius: 10px;
            background: @c-light-primary;
            position: absolute;
            z-index: 1;
            border: solid 2px #ffffff;

        }

        &::before {
            content: "";
            display: block;
            width: 0;
            height: 0;
            border: 10px solid transparent;
            border-right-color: @c-light-primary;
            top: 20px;
            left: 20px;
            position: absolute;
            z-index: 1;
        }
    }

    .if-timeAxis-item:last-child {
        padding-bottom: 50px;
    }
}
</style>
