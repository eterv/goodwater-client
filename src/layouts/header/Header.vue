<template>
  <header :class="classShow">
    <Content>
      <logo class="logo" :is-white="!isShow" width="130" />
      <nav-bar class="hidden::small" :class="classShow" />
      <nav-bar-mobile class="hidden::big" :class="classShow" />
    </Content>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from '@/store'
import Content from '@/components/blocks/Content.vue'
import Logo from '@/components/elements/Logo.vue'
import NavBar from '@/components/NavBar/NavBar.vue'
import NavBarMobile from '@/components/NavBar/NavBarMobile.vue'
import { useWindowScroll } from '@/use/useScroll'

export default defineComponent({
  name: 'Header',
  components: {
    Content,
    Logo,
    NavBar,
    NavBarMobile,
  },
  setup() {
    const store = useStore()
    const isHome = computed(() => store.state.global.routeInfo.isHome)
    const scrollTop = ref(0)

    const isShow = computed(() => (isHome.value && scrollTop.value > 25) || !isHome.value)
    const classShow = computed(() => (isShow.value ? 'on' : ''))

    useWindowScroll(({ current }) => {
      scrollTop.value = current.y
    }, 100)

    return {
      classShow,
      isShow,
    }
  },
})
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: $header-height-small;
  z-index: 1;
  background: transparent;
  transition-duration: $tran-duration;

  &.on {
    background: #f8f8f8;
    box-shadow: 0 5px 5px rgba(50, 50, 50, 0.15);
  }

  .logo:deep(img) {
    width: 100px;
  }

  @include media-big {
    height: $header-height-big;

    .logo:deep(img) {
      width: 130px;
    }
  }

  .content {
    display: flex;
    align-items: center;
    height: 100%;
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
