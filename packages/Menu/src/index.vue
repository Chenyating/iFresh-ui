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
    max-width: 900px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-weight: bold;
}
</style>
