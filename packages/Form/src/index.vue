<template>
<!-- 时间轴 -->
<div class="if-form">
    <slot></slot>
</div>
</template>

<script>
import schema  from 'async-validator'
const prefixCls = `if-timeAxis`
export default {
    name: 'if-form',
    props: {
        rules: {
            type:Object
        },
        right: {
            type: Boolean,
            default: false
        },
        left: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {}
    },
    computed: {},
    methods: {
        handleErrors(erroer,hdh) {
            console.log(erroer,"|||",hdh)
        },
        hehe() {
            var descriptor = {
                name: {
                    type: "string",
                    required: true,
                    validator: (rule, value) => value === 'muji',
                },
                xixi: {
                    type: "boolean",
                    required: true,
                    message:'请输入真假'
                },
                age: {
                    type: "number",
                    asyncValidator: (rule, value) => {
                        return new Promise((resolve, reject) => {
                            if (value < 18) {
                                reject("too young"); // reject with error message
                            } else {
                                resolve();
                            }
                        });
                    }
                }
            };
            var validator = new schema(descriptor);
            validator.validate({
                name: 1,
                age:10,
                xixi:1
            }, (errors, fields) => {
                if (errors) {
                    // validation failed, errors is an array of all errors
                    // fields is an object keyed by field name with an array of
                    // errors per field
                    return this.handleErrors(errors, fields);
                }
                // validation passed
            });

            // PROMISE USAGE
            validator.validate({
                name: "muji",
                age: 16
            }).then(() => {
                // validation passed or without error message
            }).catch(({
                errors,
                fields
            }) => {
                // return this.handleErrors(errors, fields);
            })
        }
    },
    mounted() {
        this.hehe();
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';
</style>
