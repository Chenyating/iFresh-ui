<template>
<div :class="className">
    <slot></slot>
</div>
</template>

<script>
const preCls = `if-form-item`
import ifIcon from '../../Icon'
export default {
    name: 'if-form-item',
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
</style>
