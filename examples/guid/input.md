# 输入框

## 基础用法
<ClientOnly>
<f-demo code='
   <if-input v-model="ms"></if-input>'>
<f-input/>
</f-demo>
</ClientOnly >
用v-model来绑定数值

## 可删除用法
<ClientOnly>
<f-demo code='
   <if-input clearable></if-input>'>
<if-input clearable/>
</f-demo>
</ClientOnly >

## 不可填写
<ClientOnly>
<f-demo code='
   <if-input disabled></if-input>'>
<if-input disabled/>
</f-demo>
</ClientOnly >

## 带icon的输入框
<ClientOnly>
<f-demo code='
 <if-input icon="apple"/>
<if-input>
   <if-icon type="alipay" slot="preIcon" size="20"/>
</if-input>
<if-input>
   <if-icon type="wechat" slot="nextIcon" size="20"/>
</if-input>
<if-input>
   <if-icon type="qq" slot="preIcon" size="20"/>
   <if-icon type="true" slot="nextIcon" size="20"/>
</if-input>'>
<if-input icon="apple"/>
<if-input>
   <if-icon type="alipay" color='dark' slot="preIcon" size="20"/>
</if-input>
<if-input>
   <if-icon type="wechat" slot="nextIcon" size="20"/>
</if-input>
<br/><br/>
<if-input>
   <if-icon type="qq" slot="preIcon" size="20"/>
   <if-icon type="true" slot="nextIcon" size="20"/>
</if-input>
</f-demo>
</ClientOnly >

## 输入长度限制
<ClientOnly>
<f-demo code='
   <if-input maxlength="20"/>'>
<if-input maxlength="20"/>
</f-demo>
</ClientOnly >

## 添加按钮
<ClientOnly>
<f-demo code='
   <if-input maxlength="20"/>'>
<if-input maxlength="20"/>
</f-demo>
</ClientOnly >
