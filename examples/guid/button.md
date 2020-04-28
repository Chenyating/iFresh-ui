# Button

## 基础用法

<ClientOnly>
<f-demo code='
<if-button>Default</if-button>
<if-button type="primary">Primary</if-button>
<if-button type="dashed">Dashed</if-button>
<if-button type="info">Info</if-button>
<if-button type="success">Success</if-button>
<if-button type="warning">Warning</if-button>
<if-button type="error">Error</if-button>'>
<if-button>Default</if-button>
<if-button type="primary">Primary</if-button>
<if-button type="dashed">Dashed</if-button>
<if-button type="info">Info</if-button>
<if-button type="success">Success</if-button>
<if-button type="warning">Warning</if-button>
<if-button type="error">Error</if-button>
</f-demo>
</ClientOnly >

按钮类型有：`默认按钮`、`主按钮`、`虚线按钮`、`辅助按钮`以及四种颜色按钮。

通过设置`type`为`primary`、`dashed`、`text`、`info`、`success`、`warning`、`error`创建不同样式的按钮，不设置为默认样式。

## 幽灵风格

<ClientOnly>
<f-demo code='
<if-button ghost>Default</if-button>
<if-button type="primary" ghost>Primary</if-button>
<if-button type="dashed" ghost>Dashed</if-button>
<if-button type="info" ghost>Info</if-button>
<if-button type="success" ghost>Success</if-button>
<if-button type="warning" ghost>Warning</if-button>
<if-button type="error" ghost>Error</if-button>' :dark='true'>
<if-button ghost>Default</if-button>
<if-button type="primary" ghost>Primary</if-button>
<if-button type="dashed" ghost>Dashed</if-button>
<if-button type="info" ghost>Info</if-button>
<if-button type="success" ghost>Success</if-button>
<if-button type="warning" ghost>Warning</if-button>
<if-button type="error" ghost>Error</if-button>
</f-demo>
</ClientOnly >

幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。

## 按钮禁用

<ClientOnly>
<f-demo code='
<if-button >Default</if-button>
<if-button  disable>Default</if-button>
<if-button type="primary" >Primary</if-button>
<if-button type="primary" disable >Primary</if-button>'>
<if-button >Default</if-button>
<if-button  disable>Default</if-button>
<if-button type="primary" >Primary</if-button>
<if-button type="primary" disable >Primary</if-button>
</f-demo>
</ClientOnly >

通过添加disabled属性可将按钮设置为不可用状态。

## 图标按钮
<ClientOnly>
<f-demo code='
<if-button  disable>Default</if-button>'>
<if-button icon='haha'  disable>Default</if-button>
</f-demo>
<if-icon/>
</ClientOnly >

## 加载按钮
<ClientOnly>
<f-demo code='
<if-button  disable>Default</if-button>'>
<if-button icon='haha'  disable>Default</if-button>
</f-demo>
</ClientOnly >



## 输入框

<ClientOnly>
<f-input/>
</ClientOnly >
