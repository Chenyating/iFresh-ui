<template>
  <div class="x-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'x-button',
  props: {
    type: String
  }
}
</script>

<style scoped lang='less'>
@import '../../base.less';
  .x-button {
      display: inline-block;
      padding: 3px 6px;
      background:@red;
  }
</style>