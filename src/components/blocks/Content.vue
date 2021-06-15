<template>
  <div class="content">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Content',
})
</script>

<style lang="scss" scoped>
.content {
  max-width: $content-width;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
