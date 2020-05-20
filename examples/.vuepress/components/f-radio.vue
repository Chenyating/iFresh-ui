<template>
<div>
    使用v-model时，默认值为label；
    <if-radio v-model="isName" label="Radio2" />{{isName}}
    <br/>
    按钮组，value赋值时：
    <if-radio-group v-model="msg">
        <if-radio label="huli">狐狸</if-radio>
        <if-radio  label='qingwa'>青蛙</if-radio>
    </if-radio-group>
    <br />
    按钮组，value未赋值，默认值为label：
    <if-radio-group v-model="msg">
        <if-radio label="狐狸" />
        <if-radio label="青蛙" />
    </if-radio-group>
    <div>{{msg}}</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isTrue: false,
            isName: '',
            msg: false,
        }
    },
}
</script>
