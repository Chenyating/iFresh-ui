<template>
<div class="option" :value="value" :selected='selected'  @click="choseItem(value)">
    <slot></slot>
    <if-icon v-if="selected" type="true" size='20'/>
</div>
</template>

<script>
import ifIcon from '../../Icon/src/index.vue'
export default {
    name: 'if-option',
    components: {
        ifIcon
    },
    props: {
        value:{
            type: [String, Object, Number, Array]
        }
    },
    computed: {
        iconSize() {},
        classes() {
            return [{
                [`rotate`]: this.type == 'loading',
            }];
        },
        styles() {
            let style = {};
            if (this.type == 'loading') {
                style = {
                    animation: `rotate 1s linear infinite`,
                };
            }
            return style;
        },
        selected() {
            if(this.$parent.value==this.value){
                return true
            }else{
                return false
            }
        }
    },
    methods: {
        choseItem(value) {
            this.$parent.changeMethod(value)
            this.$parent.blurMethod(value)
            this.$emit('change',this.value)
        },
        changeover(){
            console.log("change")
        }
    }
}
</script>

<style lang="less" scoped>
@import './public/assets/style/index.less';
.option{
    background: @white;
    padding: 0 @d-normal;
    &:hover{
        background: @c-primary;
    }
}

</style>
