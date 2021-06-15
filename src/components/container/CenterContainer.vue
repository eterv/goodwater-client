<template>
  <div class="center-container" :style="{ maxWidth: maxWidth + 'px', padding: padding }">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CenterContainer',
  props: {
    maxWidth: {
      type: Number,
      required: true,
      default: 1000,
    },
    padding: {
      type: String,
      default: '1rem',
    },
  },
})
</script>

<style lang="scss" scoped>
.center-container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
