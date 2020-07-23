<template>
<div :class="className" v-if="ifCurrentShow">
    <div class="modal-content" :style="styles">
        <div class="title-box">
            <slot name="title">
                {{ title }}
            </slot>
            <ifIcon class="close" type="close" size="30" @click="cancle" />
        </div>
        <ifDivider />
        <div class="body-box">
            <slot name="body">
                这是一个对话框哦
            </slot>
        </div>
        <ifDivider />
        <div class="bottom-box">
            <slot name="bottom">
                <ifButton  @click="cancle">取消</ifButton>
                <ifButton type="success"  @click="submit">确定</ifButton>
            </slot>
        </div>
    </div>
</div>
</template>

<script>
import ifDivider from '../../Divider/src/index.vue'
import ifButton from '../../Button/src/index.vue'
import ifIcon from '../../Icon/src/index.vue'

const preCls = `if-modal`

export default {
    components: {
        ifDivider,
        ifButton,
        ifIcon
    },
    name: 'if-modal',
    data() {
        return {
            ifCurrentShow: this.ifshow,
        };
    },
    props: {
        title: {
            type: String,
            default: "温馨提示",
        },
        ifshow: {
            type: Boolean,
            default: true,
        },
        width: {
            type: String,
            default: "600",
        },
    },
    watch: {
        ifshow(newVal, oldVal) {
            this.ifCurrentShow = newVal;
        },
    },
    computed: {
        styles() {
            let style = {};
            style = {
                width: `${this.width}px`,
            };
            return style;
        },
        className() {
            return [`${preCls}`, {
                [`${preCls}-innerText`]: this.innerText,
                [`${preCls}-disabled`]: this.disabled,
                [`${preCls}-textarea`]: this.type == 'textarea',
                [`${preCls}-rightPadding`]: (this.clearable || this.maxlength) && this.type != 'textarea',
            }]
        },
    },
    methods: {
        cancle() {
            this.ifCurrentShow = false;
            this.$emit("cancleBtn", false);
        },
        submit() {
            this.ifCurrentShow = false;
            this.$emit("submitBtn", false);
        },
    },
};
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.bottom-box {
    text-align: right;
}

.if-modal {
    background: #37373799;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    .modal-content {
        border-radius: @border-radius;
        background: white;
        margin: 0 auto;
        position: relative;
        outline: 0;
        top: 2*@d-big;
        padding: @d-normal 0;
    }

    // title
    .title-box {
        text-align: center;
        .t-main();
        position: relative;

        .close {
            position: absolute;
            right: @d-normal;
            cursor: pointer;
        }
    }

    // body
    .body-box {
        padding: 0 @d-normal;
    }

    // bottom
    .bottom-box {
        padding: 0 @d-normal;
    }

}
</style>
