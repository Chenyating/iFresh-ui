<template>
<div>
    <if-button>开始</if-button>
</div>
</template>

<script>
export default {
    data() {
        return {
            ms: '输入可以改变文字'
        }
    },
    computed: {
        msg() {
            return this.ms
        }
    },
    methods: {
        bey() {
            this.ms = ''
        }
    }
}
</script>
