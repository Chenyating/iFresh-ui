<template>
<div>
    <if-input v-model="ms"></if-input>
    <div>{{ms}}</div>
</div>
</template>
<script>
export default {
    data() {
        return {
            ms:''
        }
    },
}
</script>