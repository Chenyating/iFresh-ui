# Menu

## 基础用法
<ClientOnly>
<f-demo code='
   <if-input v-model="ms"></if-input>'>
<if-menu active='2'>
<if-menu-item name='1'><if-icon type='home' color='white' size='20'/>首页</if-menu-item>
<if-menu-item name='2'><if-icon color='white' size='20'/>目录</if-menu-item>
<if-menu-item name='3'><if-icon color='white' size='20'/>关于</if-menu-item>
<if-submenu name='3' title='更多'>
<if-menu-item name='1'><if-icon type='home' color='white' size='20'/>首页</if-menu-item>
<if-menu-item name='2'><if-icon color='white' size='20'/>目录</if-menu-item>
<if-menu-item name='3'><if-icon color='white' size='20'/>关于</if-menu-item>
</if-submenu>
</if-menu>
</f-demo>
</ClientOnly >

## 基础用法
<ClientOnly>
<f-demo code='
   <if-input v-model="ms"></if-input>'>
<if-menu active='2' mode='vertical'>
<if-menu-item name='1'><if-icon type='home' color='white' size='20'/>首页</if-menu-item>
<if-menu-item name='2'><if-icon color='white' size='20'/>目录</if-menu-item>
<if-menu-item name='3'>关于</if-menu-item>
<if-menu-item name='4'>更多</if-menu-item>
</if-menu>
</f-demo>
</ClientOnly >