<template>
  <Header />
  <main :class="{ home: isHome }">
    <router-view />
  </main>
  <Footer />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import Header from '@/layouts/header/Header.vue'
import Footer from '@/layouts/footer/Footer.vue'

export default defineComponent({
  name: 'LayoutDefault',
  components: {
    Header,
    Footer,
  },
  setup() {
    const store = useStore()
    const isHome = computed(() => store.state.global.routeInfo.isHome)

    return {
      isHome,
    }
  },
})
</script>

<style lang="scss" scoped>
main {
  padding-top: $header-height-small;

  &.home {
    padding-top: 0 !important;
  }

  @include media-big {
    padding-top: $header-height-big;
  }
}
</style>
