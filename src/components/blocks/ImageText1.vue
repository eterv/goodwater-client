<template>
  <div class="container" :class="{ invert, wide }">
    <div class="img">
      <img :alt="alt" :src="src" />
    </div>
    <div class="text">
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ImageText1',
  props: {
    alt: {
      type: String,
      default: '',
    },
    invert: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
      default: '',
    },
    wide: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  .img {
    position: relative;
    padding-bottom: calc(100% * 9 / 16);

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .text {
    padding: 20px 30px 30px;
    background-color: white;
    color: #707070;
    font-size: 18px;
    line-height: 30px;
  }

  @include media-big {
    display: flex;
    align-items: stretch;
    height: 540px;

    .img {
      order: 0;
      width: 50%;
      padding-bottom: 0;
    }

    .text {
      display: flex;
      align-items: center;
      width: 50%;
      padding: 20px 0;

      div {
        width: 100%;
        max-width: 600px;
        padding: 0 60px;
      }
    }

    &.invert {
      .img {
        order: 2;
      }

      .text div {
        margin-left: auto;
        padding: 0 40px;
      }
    }

    &.wide {
      .text div {
        max-width: 620px;
      }
    }
  }
}
</style>
