<template>
<div class="if-form-item">
    <span :class="className" :style="styles">{{label}}</span>
    <div class="item">
        <slot></slot>
        <div class="message-text">
            <transition name="fade">
                <div v-show="error">{{error}}</div>
            </transition>
        </div>
    </div>
</div>
</template>

<script>
import schema from 'async-validator'
export default {
    name: 'if-form-item',
    props: {
        prop: {
            type: String
        },
        label: {
            type: String
        },
    },
    computed: {
        className() {
            return [`label-text`, {
                [`label-text-required`]: this.prop ? this.formValue.rules[this.prop][0].required : false,
            }]
        },
        styles() {
            var style = {
                width: this.$parent.labelWidth + 'px',
            };
            return style;
        },
    },
    inject: ['formValue'],
    data() {
        return {
            rule: this.$parent[this.props],
            error: ''
        }
    },
    methods: {
        validate() {
            var rule = this.formValue.rules[this.prop]
            var value = this.formValue.model[this.prop];
            // 创建校验规则
            var validator = new schema({
                [this.prop]: rule
            });
            // 校验返回
            return validator.validate({
                [this.prop]: value
            }, (errors, fields) => {
                if (errors) {
                    this.error = errors[0].message;
                } else {
                    this.error = ''
                }
            });
        },
        reset() {
            this.$nextTick(() => {
                this.formValue.model[this.prop] = null;
                this.error = ''

            })
        }
    },
    mounted() {
        this.$on('validate', () => {
            this.validate();
        })
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-form-item {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    outline: 0;

    input {
        width: 100%;
    }

    .label-text {
        margin-right: @d-normal;
        text-align: right;
        line-height: 30px;
    }

    .label-text-required:before {
        content: '\273B';
        display: inline-block;
        vertical-align: middle;
        color: @c-error;
        font-size: 12px;
        line-height: 20px;
        margin-right: @d-mini;
        /*改变复选框的边框颜色也可以不要边框*/
    }

    .item {
        .message-text {
            .t-tip();
            color: @c-error;
            height: 2*@d-normal;
            margin-top: @d-mini;
        }
    }
}
</style>
