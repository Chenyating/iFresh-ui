<template>
<div class="if-image-box">
    <div v-if="isError" class="error-tip">
        <slot name="error">加载失败</slot>
    </div>
    <img :name='name' v-else :src="imgSrc" :alt="alt" :class="classes" :style="styles" @error="imgError" />
</div>
</template>

<script>
const prefixCls = 'if-image'
const now = Date.now();
let num = 0;
const radomName = () => {
    return `ifimg${now}_${num++}`
}
export default {
    name: 'if-image',
    props: {
        src: {
            type: String
        },
        alt: {
            type: String,
        },
        fit: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            isError: false,
            name: radomName()
        }
    },
    computed: {
        imgSrc() {
            if (this.src.substr(0, 4) == "http") {
                return this.src
            } else {
                return require(this.src)
            }
        },
        classes() {
            return [`${prefixCls}`, {}];
        },
        styles() {
            let style = {};
            style = {
                objectFit: this.fit,
            };
            return style;
        }
    },
    methods: {
        imgError(img) {
            this.isError = true;
            this.$emit('error', this.isError)
        }
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-image-box {
    display: inline-block;
    width: 100%;
    height: 100%;
    vertical-align: top;

    .if-image {
        width: inherit;
        height: inherit;
    }

    .error-tip {
        display: inline-block;
        width: inherit;
        height: inherit;
        background: @c-disable;
        .flex-center();
        .t-tip();
    }
}
</style>
