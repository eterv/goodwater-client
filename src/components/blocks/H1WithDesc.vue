<template>
  <div class="container">
    <H1>{{ header }}</H1>
    <Content class="desc" :class="{ narrow }">
      <slot />
    </Content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Content from './Content.vue'
import H1 from './H1.vue'

export default defineComponent({
  name: 'H1WithDesc',
  components: {
    Content,
    H1,
  },
  props: {
    header: {
      type: String,
      default: '',
    },
    narrow: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  padding: 30px 0;
  text-align: center;

  @include media-big {
    padding: 60px 0;
  }
}

.desc {
  padding: 15px 40px 0;
  color: #333;
  font-size: 18px;
  line-height: 1.67;

  @include media-big {
    padding: 30px 20px 0;
    font-size: 20px;
    line-height: 2;

    &.narrow {
      max-width: 950px;
    }
  }
}
</style>
