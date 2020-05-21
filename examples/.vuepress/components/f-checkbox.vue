<template>
<div>
    使用v-model时，默认值为label；
    <if-checkbox v-model="isTrue" label="Radio3" />{{isTrue}}
    <if-checkbox v-model="isTrue" label="Radio3"/>
    <br/>
    按钮组，value未赋值，默认值为label：
    <if-checkbox-group v-model="msg">
        <if-checkbox label="狐狸" />
        <if-checkbox label="青蛙" />
        <if-checkbox label="大象" />
    </if-checkbox-group>
    <div>{{msg}}</div>
    <br/>
    按钮组，value未赋值，默认值为label：
    <if-checkbox-group v-model="isName">
        <if-checkbox label="狐狸" />
        <if-checkbox label="青蛙" />
        <if-checkbox label="大象" />
    </if-checkbox-group>
    <div>{{isName}}</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isTrue: false,
            isName: [],
            msg: ['狐狸','大象'],
        }
    },
}
</script>
