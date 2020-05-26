<template>
<div class="if-select" :class="classes">
    <div class="select-box" @click="clickMethod">
        <input :value="currenValue" @blur="blurMethod" />
        <if-icon class="turnup" type="down" size='20' />
    </div>
    <div class="select-item" v-show="showItem">
        <slot></slot>
    </div>
</div>
</template>

<script>
import ifIcon from '../../Icon/src/index.vue'
export default {
    name: 'if-select',
    components: {
        ifIcon
    },
    props: {
        value: {
            type: [String, Object, Number, Array]
        },
        size: {
            type: String,
            default: '50'
        },
        type: {
            type: String,
            default: 'fish'
        }
    },
    data() {
        return {
            showItem: false,
            currenValue: this.value
        }
    },
    computed: {
        iconSize() {},
        classes() {
            return [{
                [`rotate`]: this.type == 'loading',
            }];
        },
        styles() {
            let style = {};
            if (this.type == 'loading') {
                style = {
                    animation: `rotate 1s linear infinite`,
                };
            }
            return style;
        },
    },
    methods: {
        clickMethod() {
            this.showItem = !this.showItem;
        },
        changeMethod(value) {
            this.currenValue = value;
            this.$emit('input', this.currenValue);
            this.$emit('change', this.currenValue)
            this.$emit('blur', this.currenValue)
            this.showItem = false;
        },
        blurMethod() {
            this.showItem = false;
        }
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-select {
    position: relative;
    .t-content();

    .select-box {
        input {
            .border-all();
            .t-content();
            box-sizing: border-box;
            padding: 0 @d-mini;
            border-radius: @border-radius;
            padding-right: 25px;

            &:focus {
                .border-shadow(@c-primary);
                outline: solid 1px @c-primary;
            }
        }

        &:hover {
            .border-shadow(@c-primary)
        }
    }

    .select-item {
        width: 100%;
        position: absolute;
        .border-shadow(@c-primary)
    }

    .turnup {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        animation: turnup 1s linear;
    }
}
</style>
