<template>
<div :class="className">
    <slot></slot>
</div>
</template>

<script>
const preCls = `if-menu`
export default {
    name: 'if-menu',
    components: {},
    props: {
        active: {
            type: String || Number,
            default: '1'
        },
        mode: {
            type: String,
            default: 'horizontal'
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
            activeName: this.active
        }
    },
    methods: {
        changeActive(name) {
            this.activeName = name;
        }
    }
}
</script>



<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-menu {
    position: relative;
    .flex-c-center();
    background: @c-primary;
    text-align: right;

    .if-menu-item {
        .flex-c-center();

    }

    .if-menu-item-get {
        border-bottom: 2px solid @white;
    }
}

.if-menu-vertical {
    display: inline-flex;
    flex-direction: column;
    background: @c-primary;
    text-align: right;
    box-sizing: content-box;

    .if-menu-item {
        text-align: right;
        display: inline-block;
    }

    .if-menu-item-get {
        border-right: 2px solid @white;
        border-bottom: 0px;
    }
}
</style>
