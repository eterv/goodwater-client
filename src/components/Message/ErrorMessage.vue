<template>
  <message>
    <slot />
  </message>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Message from './Message.vue'

export default defineComponent({
  name: 'ErrorMessage',
  components: {
    Message,
  },
})
</script>

<style lang="scss" scoped></style>
