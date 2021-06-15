<template>
  <footer>
    <Content>
      <logo class="logo" center />
      <nav class="hidden::small">
        <router-link v-for="(item, i) in navList" :key="i" class="item" :to="item.href">
          {{ item.text }}
        </router-link>
      </nav>

      <div class="copyright">
        © 2019 {{ host }}. ALL RIGHT RESERVED.
        <br className="hidden::big" />
        <span className="hidden::small">&nbsp;|&nbsp;</span>
        Serviced by Technobelly Company

        <a v-if="user" class="sign signout" @click="signOut">&nbsp;</a>
        <router-link v-else class="sign signin" :to="urlSignIn">&nbsp;</router-link>
      </div>
    </Content>
  </footer>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import Content from '@/components/blocks/Content.vue'
import Logo from '@/components/elements/Logo.vue'

export default defineComponent({
  name: 'Header',
  components: {
    Content,
    Logo,
  },
  setup() {
    const store = useStore()

    const user = computed(() => store.state.auth.user)
    const routeInfo = computed(() => store.state.global.routeInfo)
    const host = computed(() => location.host)
    const navList = computed(() => store.state.global.navList)

    const redirect = computed(() => encodeURIComponent(routeInfo.value.path))
    const urlSignIn = computed(
      () => `/signin${routeInfo.value.isHome ? '' : `?redirect=${redirect.value}`}`
    )

    const signOut = async () => await store.dispatch('auth/signOut')

    return {
      user,
      host,
      navList,
      urlSignIn,

      signOut,
    }
  },
})
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  padding: 40px 0;

  transition-duration: $tran-duration;

  &.on {
    background: white;
    box-shadow: 0 5px 5px rgba(50, 50, 50, 0.15);
  }

  .logo:deep(img) {
    width: 160px;
  }

  @include media-big {
    .logo:deep(img) {
      width: 250px;
    }
  }
}

nav {
  display: flex;
  margin-top: 60px;

  a {
    &:not(:first-child) {
      margin-left: auto;
    }

    color: #333;
    font-size: 22px;
  }
}

.copyright {
  padding: 40px 35px 0;
  color: #7e7e7e;
  font-size: 12px;
  font-weight: 200;
  line-height: 22px;
  text-align: center;

  .sign {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 3px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='%23ccc' d='M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z'%3E%3C/path%3E%3C/svg%3E")
      center/contain no-repeat;
    cursor: pointer;

    &.signout {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='%23ccc' d='M423.5 0C339.5.3 272 69.5 272 153.5V224H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-48v-71.1c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80C576 68 507.5-.3 423.5 0z'%3E%3C/path%3E%3C/svg%3E");
    }
  }

  @include media-big {
    padding: 150px 15px 0;
    font-size: 22px;
    font-weight: normal;

    .sign {
      width: 22px;
      height: 22px;
    }
  }
}
</style>
