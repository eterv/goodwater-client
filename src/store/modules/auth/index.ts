import { Module } from 'vuex'
import { RootState } from '../../index'
import { actions } from './actions'
import { mutations } from './mutations'

export interface AuthState {
  authToken: string
  user: User | null
}

export interface User {
  id?: number
  email?: string
  pw?: string
  name?: string
  tel?: string
  isAdmin?: boolean
}

export const auth: Module<AuthState, RootState> = {
  namespaced: true,

  state: () => ({
    authToken: '',
    user: null,
  }),

  getters: {
    isAdmin: (state) => state.user?.isAdmin ?? false,
    isAuthenticated: (state) => !!state.user,
  },

  mutations,
  actions,
}
