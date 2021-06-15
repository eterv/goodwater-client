<template>
  <div class="container">
    <div class="img">
      <img :alt="alt" :src="src" />
      <div class="text">
        <slot />
      </div>
    </div>
    <div class="bar" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TopImage',
  props: {
    alt: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  .img {
    position: relative;
    padding-bottom: 700px;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 36px;
    font-weight: 500;
    text-shadow: 0 3px 10px rgba(0, 0, 0, 0.27);
    text-align: center;
    white-space: nowrap;
  }
  .bar {
    height: 16px;
    background: #252c46;
  }

  @include media-big {
    .text {
      font-size: 90px;
    }
  }
}
</style>
