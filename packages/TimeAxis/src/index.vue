<template>
<!-- 时间轴 -->
<div class="if-timeAxis-box">
    <if-tag fill v-if="title" @click="showTimeAxis" :class='titleClasses'>
        <if-icon class="icon" color='white' :type="ifshow?'up':'down'" size="20" />
        {{title}}
    </if-tag>
    <div :class="classes">
        <slot v-if="ifshow"></slot>
    </div>

</div>
</template>

<script>
import ifTag from '../../Tag'
import ifIcon from '../../Icon'
const prefixCls = `if-timeAxis`
export default {
    name: 'if-timeAxis',
    components: {
        ifTag,
        ifIcon
    },
    props: {
        title: {
            type: String
        },
        right: {
            type: Boolean,
            default: false
        },
        left: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            ifshow: true
        }
    },
    computed: {
        classes() {
            return [{
                [`${prefixCls}`]: !this.right && !this.left,
                [`${prefixCls}-right`]: this.right && !this.left,
                [`${prefixCls}-left`]: !this.right && this.left,
            }];
        },
        titleClasses() {
            var cls = `timeAxis-title`
            return [{
                [`${cls}`]: !this.right && !this.left,
                [`${cls}-right`]: this.right && !this.left,
                [`${cls}-left`]: !this.right && this.left,
            }];
        },
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
    padding: 0 @d-normal;

    .title {
        position: absolute;
        top: 10px;
        margin: 0 auto;
        z-index: 2;
        width: 100px;
    }

    .timeAxis-title {
        .title();
        right: 0;
        left: 0;
    }

    .timeAxis-title-right {
        .title();
        right: @d-normal;
    }

    .timeAxis-title-left {
        .title();
        left: @d-normal;
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
        .beheight();
        transition: all .3s ease-in;
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

.if-timeAxis-left {
    margin: 0 auto;
    min-height: 30px;
    padding-top: @d-big;

    &::after {
        content: '';
        display: block;
        position: absolute;
        left: 15px;
        top: 0;
        bottom: 0;
        width: 3px;
        margin-left: -1px;
        background: @c-primary;
    }

    .if-timeAxis-item {
        padding-top: 10px;
        clear: both;
        position: relative;
        width: 90%;
        display: block;
        padding-left: 40px;

        &::after {
            top: 30px;
            left: -10px;
            content: '';
            display: block;
            width: 16px;
            height: 16px;
            border-radius: 10px;
            background: @c-light-primary;
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
            border-right-color: @c-success;
            top: 30px;
            left: 20px;
            position: absolute;
            z-index: 1;
        }
    }

    .if-timeAxis-item:nth-child(2n+1) {
        width: 80%;
        min-height: 60px;
    }

    .if-timeAxis-item:nth-child(3n+1) {
        width: 100%;
        min-height: 100px;

    }
}

.if-timeAxis-right {
    margin: 0 auto;
    min-height: 30px;
    padding-top: @d-big;

    &::after {
        content: '';
        display: block;
        position: absolute;
        right: 15px;
        top: 0;
        bottom: 0;
        width: 3px;
        margin-left: -1px;
        background: @c-primary;
    }

    .if-timeAxis-item {
        float: right;
        padding-top: 10px;
        clear: both;
        position: relative;
        width: 90%;
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

    .if-timeAxis-item:nth-child(2n+1) {
        width: 80%;
        min-height: 60px;
    }

    .if-timeAxis-item:nth-child(3n+1) {
        width: 100%;
        min-height: 100px;

    }
}
</style>
