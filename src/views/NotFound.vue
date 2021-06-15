<template>
  <main id="not-found">
    <div class="box">
      <h1>404</h1>
      <div class="desc">Oops! Page Not Found :(</div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setTitle } from '@/common/helper'

export default defineComponent({
  name: 'NotFound',
  setup() {
    setTitle('Page Not Found')
  },
})
</script>

<style lang="scss" scoped>
#not-found {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box {
  h1 {
    margin: 0 0 0.3em;
    font-size: 7.5em;
    font-weight: 600;
    text-align: center;
  }
  .desc {
    font-size: 2em;
    font-weight: 200;
  }
}
</style>
