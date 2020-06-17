<template>
<transition name="fade">
    <div :class="classes" :style="styles" v-show="ifshow" @click="backtop">
        <slot>
            <ifIcon type="up" size="30" color="white" />
        </slot>
    </div>
</transition>
</template>

<script>
import ifIcon from '../../Icon/src/index.vue'
const prefixCls = 'if-backTop'
export default {
    name: 'if-backTop',
    components: {
        ifIcon
    },
    props: {
        bottom: {
            type: String,
            default:'0'
        }
    },
    computed: {
        classes() {
            return [prefixCls, {
            }];
        },
        // 整体外部颜色
        styles() {
            return {
                bottom: this.bottom+'px'
            };
        },
    },
    data() {
        return {
            ifshow: false,
        }
    },
    methods: {
        backtop() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            this.$emit('click');
        },
        scrolling() {
            const top =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop; //兼容不同的浏览器
            if (top > 100) {
                this.ifshow = true;
            } else {
                this.ifshow = false;
            }
        }
    },

    mounted() {
        window.addEventListener("scroll", this.scrolling, true); //监听滚动事件
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-backTop {
    position: fixed;
    right: 0;
    margin: @d-normal;
    padding: @d-normal;
    background: @c-primary;
    border-radius: @border-radius;
    cursor: pointer;
    .t-content();
    color: @white;
}
</style>
