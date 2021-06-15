<template>
  <base-block class="center">
    <slot />
  </base-block>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseBlock from './BaseBlock.vue'

export default defineComponent({
  name: 'CenterBlock',
  components: {
    BaseBlock,
  },
})
</script>

<style lang="scss" scoped>
.center {
  text-align: center;
}
</style>
