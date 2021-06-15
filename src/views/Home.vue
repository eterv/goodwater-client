<template>
  <div class="main-bg">
    <img src="/images/home/water1.png" />
  </div>

  <div class="title1">
    <div class="t">Made by nature</div>
  </div>

  <image-text1 src="/images/home/image-text-1.jpg">
    Lofoten Arctic Water is a natural premium water from Norway’s Lofoten Islands, located north of
    the Arctic Circle between the 68`th and 69´th parallels. The goal of the Lofoten Arctic Water
    team is to bring the experience of fresh, unpolluted water to the consumers worldwide. Situated
    at the ocean we must help to prevent microplastic to reach the ocean and also focus on the
    possibility to not only recycle but reuse.
  </image-text1>

  <center-block class="our-family">
    <H1>Our Family</H1>
    <img className="water" alt="" src="/images/home/water1.png" />
  </center-block>

  <h1-with-desc class="gray sustainability" header="Sustainability">
    At Lofoten Arctic Water, we are concerned about the environment, and want to make our production
    as environmentally friendly as possible. If you want to read more about our measures to help the
    environment.
    <router-link to="/sustainability">Click here.</router-link>
  </h1-with-desc>

  <six-images image-prefix="home/insta-" show-bottom-bar show-follow show-image-mask />

  <div v-if="false">
    <div>count: {{ count }}</div>
    <div>count2: {{ count2 }}</div>
    <button @click="increaseCount">클릭</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { setTitle } from '@/common/helper'
import CenterBlock from '@/components/blocks/CenterBlock.vue'
import H1 from '@/components/blocks/H1.vue'
import H1WithDesc from '@/components/blocks/H1WithDesc.vue'
import ImageText1 from '@/components/blocks/ImageText1.vue'
import SixImages from '@/components/blocks/SixImages.vue'

export default defineComponent({
  name: 'Home',
  components: {
    CenterBlock,
    H1,
    H1WithDesc,
    ImageText1,
    SixImages,
  },

  setup() {
    const store = useStore()
    const count = computed(() => store.state.global.count)
    const count2 = computed(() => store.getters['global/doubleCount'])

    const increaseCount = () => store.dispatch('global/INCREMENT')

    setTitle('Home')

    return {
      count,
      count2,
      increaseCount,
    }
  },
})
</script>

<style lang="scss" scoped>
.main-bg {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('/images/home/bg.jpg') center/cover no-repeat;

  img {
    position: absolute;
    left: 10%;
    bottom: -100px;
    width: 80%;
  }

  @include media-big {
    background-attachment: fixed;

    img {
      left: 50%;
      bottom: -120px;
      width: 480px;
    }
  }
}

.title1 {
  padding: 130px 10px 15px;
  text-align: center;

  .t {
    color: #ca2e26;
    font-size: 36px;
    line-height: 1.5;
  }

  @include media-big {
    padding-bottom: 55px;

    .t {
      color: #dc0d15;
      font-size: 90px;
    }
  }
}

.our-family {
  position: relative;
  padding: 30px 20px;
  text-align: center;
  background: url('/images/home/our-family-bg.jpg') center/cover no-repeat;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.75;
    background-color: #d4d4d4;
  }

  .t {
    position: relative;
    color: #707070;
  }

  .water {
    position: relative;
    max-width: 80%;
    margin-top: 40px;
  }

  @include media-big {
    padding: 20px 15px;

    &::before {
      opacity: 0.9;
    }

    .t {
      font-size: 50px;
    }

    .water {
      margin-top: 20px;
      max-width: 750px;
    }
  }
}

.sustainability {
  a {
    color: #cc3366;
  }
}
</style>
