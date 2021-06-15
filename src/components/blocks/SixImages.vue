<template>
  <div class="container">
    <H1 v-if="showFollow">Follow us @lofotenarcticwater</H1>

    <div class="images">
      <div v-for="(_, i) in [...Array(row).keys()]" :key="i" class="wrap">
        <div className="img">
          <img alt="" :src="`/images/${imagePrefix}${i + 1}.jpg`" />
          <div v-if="showImageMask" class="mask hidden::small" />
        </div>
      </div>
    </div>

    <div v-if="showBottomBar" class="bar" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import H1 from './H1.vue'

const row = 6

export default defineComponent({
  name: 'SixImages',
  components: {
    H1,
  },
  props: {
    imagePrefix: {
      type: String,
      default: '',
    },
    showBottomBar: {
      type: Boolean,
      default: false,
    },
    showFollow: {
      type: Boolean,
      default: false,
    },
    showImageMask: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      row,
    }
  },
})
</script>

<style lang="scss" scoped>
$row: 6;

.container {
  padding: 0;

  h1 {
    margin: 0;
    padding: 30px 25px 20px;
  }

  .images {
    display: flex;
    flex-wrap: wrap;
  }
  .wrap {
    width: calc(100% / #{math.div($row, 2)});
  }

  .img {
    position: relative;
    padding-bottom: 100%;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .mask {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(84, 89, 95, 0.6);
    }
  }
  .bar {
    height: 16px;
    background-color: #252c46;
  }

  @include media-big {
    h1 {
      padding: 10px 0 30px;
    }

    .wrap {
      width: calc(100% / #{$row});
    }

    .text {
      display: flex;
      align-items: center;
      width: 50%;
      max-width: 500px;
      padding: 20px 0 20px 60px;
      color: #707070;
    }
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
