<template>
<div :class="className">
    <div class="input" :value="currentValue" tabindex="0" @click="showList">
        <span v-if="!more">{{currentValue}}</span>
        <span v-else class="select-item" v-for="(item,index) in currentValue" :key="index">{{item}}</span>
    </div>
    <div class="list" v-if="ifshowList">
        <slot></slot>
    </div>
</div>
</template>

<script>
const preCls = `if-select`
export default {
    name: 'if-select',
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
            return [`${preCls}`, {
                [`${preCls}-textarea`]: this.type == 'textarea',
            }]
        },
    },
    data() {
        return {
            currentValue: this.value,
            list: this.value,
            ifshowList: false
        }
    },
    methods: {
        // 显示下拉列表
        showList() {
            this.ifshowList = !this.ifshowList;
        },
        childrenDo() {
            if (this.more) {
                this.ifshowList = true;
            } else {
                this.ifshowList = false;
            }
        },
        // 主要是用于 input type=button，当被点击时触发此事件2
        clickMethod(value) {
            if (this.more) {
                var repeat = false;
                for (let i = 0; i < this.list.length; i++) {
                    if (this.list[i] == value) {
                        repeat = true;
                        this.list.splice(i, 1)
                    }
                }
                if (!repeat) {
                    this.list.push(value);
                }
                this.$emit('click', this.list)
                this.$emit('input', this.list);
            } else {
                this.currentValue = value;
                this.$emit('click', value)
                this.$emit('input', value);
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-select {
    outline: 0;

    .input {
        min-height: 32px;
        width: 200px;
        .t-content();
        .border-all();
        box-sizing: border-box;
        padding: 0 @d-mini;
        border-radius: @border-radius;
        overflow: hidden;
        overflow-y: visible;

        &:focus {
            outline: 0;
            .border-shadow(@c-primary)
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
