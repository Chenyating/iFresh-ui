<template>
<div class="if-select" :value="currentValue" tabindex="0" @click="ifshowList=disabled?false:!ifshowList" @blur="ifshowList=false" @change="changeMethod">
    <!-- 主展示，显示选中内容 -->
    <div class="input" :class="className">
        <div v-if="!more" class="value-box">
            <slot name="preIcon">
            </slot>
            <span class="currentValue">{{currentValue}}</span>
        </div>
        <div v-else @click="closeTag(item)" class="select-item" v-for="(item,index) in valueList" :key="index">{{item.label}}
            <if-icon class="tag-icon" color="white" type="close" size="20" />
        </div>
        <if-icon class="icon" :type="ifshowList?'up':'down'" size="20" />
    </div>
    <!-- 下拉列表展示 -->
    <div class="list" v-show="ifshowList">
        <slot></slot>
    </div>
</div>
</template>

<script>
import ifIcon from '../../Icon/src/index.vue';

const preCls = `if-select`
export default {
    name: 'if-select',
    components: {
        ifIcon
    },
    props: {
        value: {
            type: [Array, String, Number],
        },
        // 是否为多选
        more: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        className() {
            return {
                [`${preCls}-disabled`]: this.disabled,
            }
        }
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
            if (this.more) {
                for (let i = 0; i < this.valueList.length; i++) {
                    if (this.valueList[i].value == params.value) {
                        this.valueList[i].label = params.label;
                    }
                }
            } else {
                if (this.currentValue == params.value) {
                    this.currentValue = params.label;
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
        },
        closeTag(params) {
            event.stopPropagation();
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i] == params.value) {
                    this.list.splice(i, 1)
                    this.valueList.splice(i, 1)
                }
            }
            this.$emit('input', this.list);
        },
        changeMethod(){
            this.$emit('change',this.currentValue)
        }
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-select {
    outline: 0;
    border-radius: @border-radius;
    position: relative;
    height: 32px;

    &:focus {
        outline: 0;
        .border-shadow(@c-primary)
    }

    .input {
        vertical-align: middle;
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
        display: inline-block;
        flex-wrap: wrap;

        .icon {
            position: absolute;
            top: 0;
            bottom: 0;
            right: @d-mini;
        }
    }

    .select-item {
        font-size: 12px;
        line-height: 20px;
        padding: 0 @d-normal;
        margin-right: @d-mini;
        background: @c-primary;
        display: inline-block;
        position: relative;
        padding-right: 25px;
        border-radius: 20px;
        cursor: pointer;

        .tag-icon {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
        }
    }

    .list {
        .border-shadow(@c-primary);
        background: @white;
    }
}

.value-box {
    display: inline-flex;

    .currentValue {
        padding-left: @d-mini;
    }
}

.if-select-disabled {
    background: @c-disable  !important;
    color: @c-tip  !important;
    cursor: not-allowed;
}
</style>
