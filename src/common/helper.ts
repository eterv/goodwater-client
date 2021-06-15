import { Ref } from 'vue'
import { useHead } from '@vueuse/head'

type MaybeRef<T> = T | Ref<T>

// head title 설정하기
export function setTitle(title: MaybeRef<string>, appendSuffix: boolean = true): any {
  if (appendSuffix) {
    title += ` - ${import.meta.env.VITE_APP_NAME_EN}`
  }
  useHead({ title })
}
