<template>
  <div class="container">
    <H1>
      <slot />
    </H1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import H1 from './H1.vue'

export default defineComponent({
  name: 'TopH1',
  components: {
    H1,
  },
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
  text-align: center;

  @include media-big {
    height: 250px;
  }
}
</style>
