<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseBlock',
})
</script>

<style lang="scss" scoped>
div {
  padding: 20px 15px;

  @include media-big {
    padding: 50px 20px;
  }
}
</style>
