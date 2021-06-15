<template>
  <nav>
    <router-link v-for="(item, i) in navList" :key="i" class="item" :to="item.href">
      {{ item.text }}
    </router-link>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { RootState } from '@/store'

export default defineComponent({
  name: 'NavBar',
  setup() {
    const store = useStore<RootState>()
    // const route = useRoute()

    const navList = computed(() => store.state.global.navList)

    return {
      navList,
    }
  },
})
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-self: flex-end;
  opacity: 0;
  margin-left: auto;
  visibility: hidden;

  &.on {
    opacity: 1;
    visibility: visible;
  }

  .item {
    position: relative;
    padding: 20px 15px;
    color: #818181;
    font-size: 15px;
    text-align: center;

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 10px;
      background: transparent;
      transition-duration: $tran-duration;
    }

    &:hover::before,
    &.router-link-active::before {
      background: #ddd;
    }

    @include media-up-l() {
      padding: 20px 30px;
    }
  }
}
</style>
