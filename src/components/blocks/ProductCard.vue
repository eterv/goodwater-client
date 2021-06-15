<template>
  <div class="container">
    <div class="card-media">
      <img :src="image" />
    </div>

    <div class="card-content">
      <div>
        {{ content }}
        <br />
        Read more
      </div>
      <div class="arrow">
        <img src="/images/products/top-product-arrow.png" alt="" width="80" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductCard',
  props: {
    content: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}

.card-media {
  position: relative;
  padding-bottom: 100%;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.card-content {
  margin-top: 30px;
  color: #707070;
  font-size: 18px;
  line-height: 28px;

  @include media-big {
    font-size: 20px;
    line-height: 38px;
  }

  .arrow {
    margin-top: 30px;
  }
}
</style>
