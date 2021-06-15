<template>
  <div class="container" :class="{ center }">
    <router-link to="/">
      <img class="img" :src="img.src" :alt="img.alt" :width="img.width" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'Logo',
  props: {
    center: {
      type: Boolean,
      default: false,
    },
    isWhite: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '250',
    },
  },
  setup(props) {
    const img = reactive({
      alt: import.meta.env.VITE_APP_NAME_EN,
      src: computed(() => `/images/logo-${props.isWhite ? 'w' : 'b'}.png`),
      width: computed(() => props.width),
    })

    return {
      img,
    }
  },
})
</script>

<style lang="scss" scoped>
.container {
  text-align: left;

  &.center {
    text-align: center;
  }
}
</style>
