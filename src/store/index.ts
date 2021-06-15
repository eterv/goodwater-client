import { createLogger, createStore, Store, useStore as useStoreFn } from 'vuex'
import { global, GlobalState } from './modules/global'
import { auth, AuthState } from './modules/auth'

export interface RootState {
  global: GlobalState
  auth: AuthState
}

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: { global, auth },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})

export const useStore = (): Store<RootState> => useStoreFn<RootState>()
