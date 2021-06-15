import { Module } from 'vuex'
import { LocationQuery } from 'vue-router'
import { navList } from '@/config'
import { RootState } from '../../index'
import { actions } from './actions'
import { mutations } from './mutations'

export interface GlobalState {
  count: number

  // Navigation List
  navList: {
    name: string
    href: string
    text: string
  }[]

  routeInfo: RouteInfo
}

export interface RouteInfo {
  isHome: boolean
  name: string
  path: string
  query: LocationQuery
}

export const global: Module<GlobalState, RootState> = {
  namespaced: true,

  state: () => ({
    count: 0,

    navList: navList,
    routeInfo: {
      isHome: false,
      name: '',
      path: '',
      query: {},
    },
  }),

  getters: {
    doubleCount(state, _getters, _rootState) {
      //
      return state.count * 2
    },
  },

  mutations,
  actions,
}
