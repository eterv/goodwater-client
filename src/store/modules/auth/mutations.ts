import { fromJson, toJson } from '@/modules/json'
import { MutationTree } from 'vuex'
import { AuthState } from '.'

export enum M {
  LOAD_AUTH_TOKEN = 'LOAD_AUTH_TOKEN',
  LOAD_CURRENT_USER = 'LOAD_CURRENT_USER',

  SET_AUTH_TOKEN = 'SET_AUTH_TOKEN',
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  REMOVE_AUTH_TOKEN = 'REMOVE_AUTH_TOKEN',
  REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER',
}

export const mutations: MutationTree<AuthState> = {
  [M.LOAD_AUTH_TOKEN]: (state) => {
    state.authToken = localStorage.getItem('at01') ?? ''
  },
  [M.LOAD_CURRENT_USER]: (state) => {
    state.user = fromJson(localStorage.getItem('user'))
  },

  [M.SET_AUTH_TOKEN]: (state, value) => {
    state.authToken = value
    localStorage.setItem('at01', value)
  },
  [M.SET_CURRENT_USER]: (state, value) => {
    state.user = value
    localStorage.setItem('user', toJson(value))
  },
  [M.REMOVE_AUTH_TOKEN]: (state) => {
    state.authToken = ''
    localStorage.removeItem('at01')
  },
  [M.REMOVE_CURRENT_USER]: (state) => {
    state.user = null
    localStorage.removeItem('user')
  },
}
