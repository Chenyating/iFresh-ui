# Image

## 基本用法
<ClientOnly>
<f-demo code='
<if-button>Default</if-button>'>
<if-image fit='fill' style="width: 100px; height: 100px"></if-image>
<if-image fit='contain' style="width: 100px; height: 100px"></if-image>
<if-image fit='cover' style="width: 100px; height: 100px"></if-image>
<if-image fit='none' style="width: 100px; height: 100px"></if-image>
<if-image fit='scale-down' style="width: 100px; height: 100px"></if-image>
</f-demo>
</ClientOnly >

## 加载失败
<ClientOnly>
<f-demo code='
<if-button>Default</if-button>'>
<if-image fit='fill' src='../开发笔记/imgs/btn2.png' style="width: 100px; height: 100px"></if-image>
<if-image fit='fill' src='../开发笔记/imgs/btn2.png' style="width: 100px; height: 100px"><div slot='error'><if-icon type='false' size='20'/>失败</div></if-image>
</f-demo>
</ClientOnly >