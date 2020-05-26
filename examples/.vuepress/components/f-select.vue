<template>
<div>
    {{model1}}
    <br/><br/>
    <if-select @blur="haha" v-model="model1" style="width:200px">
        <if-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</if-option>
    </if-select>
</div>
</template>

<script>
export default {
    data() {
        return {
            ifshow:false,
            cityList: [{
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris',
                    label: 'Paris'
                },
                {
                    value: 'Canberra',
                    label: 'Canberra'
                }
            ],
            model1: 'Canberra'
        }
    },
    methods: {
        haha(e){
            console.log(e)
        }
    }
}
</script>
