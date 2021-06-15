import { ComputedRef, Ref } from 'vue'

export interface Field<TValue = any> {
  name: string
  label: string
  type?: string
  value?: Ref<TValue>
  errors?: ComputedRef<string | undefined>
  ref?: Ref<any>
}
