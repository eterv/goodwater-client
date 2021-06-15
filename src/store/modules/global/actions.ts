import { ActionTree } from 'vuex'
import { RouteLocationNormalized } from 'vue-router'
import { RootState } from '../../index'
import { GlobalState, RouteInfo } from '.'
import { M } from './mutations'

export const actions: ActionTree<GlobalState, RootState> = {
  INCREMENT: ({ commit, state }) => {
    if (state.count < 10) {
      commit(M.INCREMENT)
    }
  },

  setRouteInfo: ({ commit }, route: RouteLocationNormalized) => {
    commit(M.SET_ROUTE_INFO, {
      isHome: route.name === 'Home',
      name: route.name,
      path: route.path,
      query: route.query,
    } as RouteInfo)
  },
}
