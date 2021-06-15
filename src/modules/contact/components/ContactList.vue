<template>
  <div class="list">
    <div class="head">
      <div>이름</div>
      <div>이메일</div>
      <div>전화번호</div>
      <div>등록일시</div>
    </div>
    <div v-for="(item, i) in state.list" :key="i" class="item">
      <div class="name">{{ item.name }}</div>
      <div>{{ item.email }}</div>
      <div>{{ item.tel }}</div>
      <div>{{ dayjs(item.dtCreated).format('YYYY-MM-DD HH:mm') }}</div>
    </div>
  </div>

  <div v-if="totalPages" class="pagination">
    <button
      v-for="(_, i) in [...Array(totalPages).keys()]"
      :key="i"
      type="button"
      class="page"
      :class="{ on: page == i + 1 }"
      @click="pageClick(i + 1)"
    >
      {{ i + 1 }}
    </button>
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import { computed, defineComponent, reactive, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
import { Contact, getContacts } from '@/modules/contact/service'

export default defineComponent({
  name: 'ContactList',
  setup() {
    const store = useStore()
    const router = useRouter()

    const page = computed(() => store.state.global.routeInfo.query.page ?? 1)
    const state = reactive({
      count: 0,
      limit: 2, // 15
      list: [] as Contact[],
    })
    const totalPages = computed(() => Math.ceil(state.count / state.limit))

    /*watch(
      () => page.value,
      async (v) => {
        const data = await getContacts(v as number, limit)
        if (data.result) {
          count.value = data.count
          list.value = data.list
        }
      },
      {
        immediate: true,
      }
    )*/
    watchEffect(async () => {
      const data = await getContacts(page.value as number, state.limit)
      if (data.result) {
        state.count = data.count
        state.list = data.list
      }
    })

    const pageClick = (pg: number) => {
      router.push({ query: { page: pg } })
    }

    return {
      dayjs,
      page,
      pageClick,
      state,
      totalPages,
    }
  },
})
</script>

<style lang="scss" scoped>
.list {
  padding: 40px 0;

  .head,
  .item {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;

    & > div {
      width: 100%;
      padding: 5px;
    }
  }

  .head {
    border-bottom: 2px solid #888;
    font-weight: bold;
  }

  @include media-big {
    .head,
    .item {
      padding: 0;

      & > div {
        width: 25%;
        padding: 15px;
      }
    }
  }
}

.pagination {
  display: flex;
  justify-content: center;
  color: #888;
  font-size: 18px;

  .page {
    appearance: none;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &.on {
      text-decoration: underline;
      font-size: 1.2em;
    }

    &:hover {
      color: #333;
    }

    &:not(:first-child) {
      margin-left: 20px;
    }
  }
}
</style>
