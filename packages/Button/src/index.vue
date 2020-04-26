<template>
  <div class="if-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'if-button',
  props: {
    type: String
  }
}
</script>

<style scoped lang='less'>
@import './public/assets/style/index.less';
  .if-button {
      display: inline-block;
      padding: 3px 6px;
      background:#000000;
      &:hover{
        background:@c-dark-primary;
        font-weight: bold;
      }
  }
</style>