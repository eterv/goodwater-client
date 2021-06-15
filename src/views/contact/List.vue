<template>
  <div class="container">
    <Content>
      <H1>문의게시판</H1>

      <contact-list />
    </Content>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { setTitle } from '@/common/helper'
import Content from '@/components/blocks/Content.vue'
import H1 from '@/components/blocks/H1.vue'
import ContactList from '@/modules/contact/components/ContactList.vue'

export default defineComponent({
  name: 'ViewContactList',
  components: {
    ContactList,
    Content,
    H1,
  },

  setup() {
    const store = useStore()
    const user = computed(() => store.state.auth.user)

    setTitle('Contact List')

    return {
      user,
    }
  },
})
</script>

<style lang="scss" scoped>
.container {
  padding: 50px 0;
}
</style>
