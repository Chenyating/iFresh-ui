<template>
<div class="if-input">
    <input :placeholder='placeholder' :value="value" 
    @input="$emit('input',$event.target.value)" 
    />
</div>
</template>

<script>
export default {
    name: 'if-input',
    props: {
        placeholder: {
            type: String,
            default: '请输入内容丫'
        }
    },
    data() {
        return {
            value: ''
        }
    },
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';

.if-input {
    input {
        .t-content();
        list-style: none;
        outline-style: none;
        padding: @d-mini @d-normal;
        .border-all-c(@c-primary);
        border-radius: 5px;
        color: @c-content;
    }

    &:hover {
        border-radius: 5px;
        display: inline-block;
        .border-shadow(@c-primary)
    }

    ::-webkit-input-placeholder {
        /*Chrome/Safari*/
        font-family: 'l-txt';
        color: @c-primary;
    }

    ::-moz-placeholder {
        /*Firefox*/
        font-family: 'l-txt';
        color: @c-primary;
    }

    ::-ms-input-placeholder {
        /*IE*/
        font-family: 'l-txt';
        color: @c-primary;
    }
}
</style>
