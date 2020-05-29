<template>
<div :class="className" :value="currentValue" tabindex="0" @click="ifshowList=!ifshowList" @blur="ifshowList=false">
    <!-- 主展示，显示选中内容 -->
    <div class="input">
        <span v-if="!more">{{currentValue}}</span>
        <span v-else class="select-item" v-for="(item,index) in valueList" :key="index">{{item.label}}</span>
        <if-icon class="icon" :type="ifshowList?'up':'down'" size="20" />
    </div>
    <!-- 下拉列表展示 -->
    <div class="list" v-show="ifshowList">
        <slot></slot>
    </div>
</div>
</template>

<script>
import ifIcon from '../../Icon/src/index.vue'

const preCls = `if-select`
export default {
    name: 'if-select',
    components: {
        ifIcon
    },
    props: {
        value: {
            type: [Array, String],
        },
        // 是否为多选
        more: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        className() {
            return [`${preCls}`]
        },
    },
    data() {
        return {
            // 选中显示值
            currentValue: this.value,
            // 多选当前值
            list: this.value,
            ifshowList: false,
            // 多选当前值包含label
            valueList: [{
                label: '',
                value: this.value
            }]
        }
    },
    methods: {
        // 更新label的名称，子组件调用
        renameLabel(params) {
            for (let i = 0; i < this.valueList.length; i++) {
                if (this.valueList[i].value == params.value) {
                    this.valueList[i].label = params.label;
                }
            }
        },
        // 子组件调用，点击列表时触发
        clickMethod(params) {
            if (this.more) {
                var repeat = false;
                for (let i = 0; i < this.list.length; i++) {
                    if (this.list[i] == params.value) {
                        repeat = true;
                        this.list.splice(i, 1)
                        this.valueList.splice(i, 1)
                    }
                }
                if (!repeat) {
                    this.list.push(params.value);
                    this.valueList.push(params)
                }
                this.$emit('input', this.list);
            } else {
                this.currentValue = params.label;
                this.$emit('input', params.value);
            }
            this.ifshowList = this.more
        }
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-select {
    outline: 0;
    border-radius: @border-radius;

    &:focus {
        outline: 0;
        .border-shadow(@c-primary)
    }

    .input {
        position: relative;
        min-height: 32px;
        width: 200px;
        .t-content();
        .border-all();
        box-sizing: border-box;
        padding: 0 @d-mini;
        border-radius: @border-radius;
        overflow: hidden;
        overflow-y: visible;

        .icon {
            position: absolute;
            top: 0;
            bottom: 0;
            right: @d-mini;
        }
    }

    .select-item {
        display: inline-flex;
        margin: @d-mini;
        .border-all();
    }

    .list {
        .border-shadow(@c-primary)
    }
}
</style>
