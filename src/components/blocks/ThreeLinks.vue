<template>
  <div class="container">
    <a href="#">Download Packaging Information</a>
    <a href="#">To Become a Distributor</a>
    <a href="#">More about the Design</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ThreeLinks',
})
</script>

<style lang="scss" scoped>
.container {
  padding: 30px 0 10px;

  a {
    display: block;
    margin-bottom: 15px;
    color: #ca2e26;
    font-size: 16px;
    text-align: center;
  }

  @include media-big {
    display: flex;
    justify-content: center;
    padding: 40px 0;

    a {
      margin-bottom: 0;
      color: #e1373d;
      font-size: 22px;

      &:not(:first-child) {
        margin-left: 80px;
      }
    }
  }
}
</style>
