# gallery

## 基础用法
<ClientOnly>
<f-demo code='
   <if-input v-model="ms"></if-input>'>
<if-gallery>
<if-gallery-item v-for="i in 20" :key='i'>
<img style="width:100%; height:100%; object-fit: cover;" src='http://localhost:3214/assets/img/my-bg.fb4c7311.jpg'/>
</if-gallery-item>
</if-gallery>
</f-demo>
</ClientOnly >
