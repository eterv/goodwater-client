<template>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Message',
})
</script>

<style lang="scss" scoped>
.container {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}
</style>
