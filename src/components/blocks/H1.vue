<template>
  <h1>
    <slot />
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'H1',
})
</script>

<style lang="scss" scoped>
h1 {
  position: relative;
  margin: 0;
  color: #707070;
  font-size: 26px;
  font-weight: 500;
  text-align: center;
  line-height: 1.3;

  @include media-big {
    font-size: 50px;
    font-weight: normal;
  }
}
</style>
