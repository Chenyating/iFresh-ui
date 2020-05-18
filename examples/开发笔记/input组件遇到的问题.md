# input组件遇到的问题

## v-model问题

外部value变化，input的值没有变化？

- ![q1](./imgs/inputQ1.png)

先理解v-model的性质
```html
<input v-model="searchText">
等价于
<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
>
```


组件上使用v-model
```html
<if-input v-model="searchText"></if-input>
等同于
<custom-input
  v-bind:value="searchText"
  v-on:input="searchText = $event"
></custom-input>
```

要让if-input能正常使用，必须：
1. 将其 value 特性绑定到一个名叫value的prop上
```js
   props: {
        value:{
            type:String,
            default:''
        }
    },
```

2. 在其 input 事件被触发时，将新的值通过自定义的input事件抛出
```html
自定义组件里的input要这么写：
<input :value="reciveValue" @input="inputMethod" />
```

注意：`reciveValue=this.value`，要指向value，不这么写，没法双向绑定。

```js
data(){
  return{
    reciveValue:this.value
  }
}

      inputMethod(e) {
            this.receiveValue=e.target.value;
            this.$emit('input', this.receiveValue);
        }
```

## 内部input变化，外部没有变化

- ![q2](./imgs/inputQ2.png)

反正每次值发送变化的时候，就$emit一下
