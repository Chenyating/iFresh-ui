<template>
  <div class="if-input" :class="type">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'if-input',
  props: {
    type: String
  },
}
</script>

<style scoped lang='less'>
@import './public/assets/style/index.less';
  .if-input {
      .t-content();
      display: inline-block;
      text-align: center;
      line-height: @line-height;
      padding:0 @d-normal;
      border-radius: @border-radius;

  }
  .primary{
    background: blue;
  }
</style>