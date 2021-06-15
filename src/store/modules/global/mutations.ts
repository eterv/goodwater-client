import { MutationTree } from 'vuex'
import { GlobalState } from '.'

export enum M {
  INCREMENT = 'INCREMENT',
  SET_IS_HOME = 'SET_IS_HOME',
  SET_ROUTE_INFO = 'SET_ROUTE_INFO',
}

export const mutations: MutationTree<GlobalState> = {
  [M.INCREMENT]: (state) => {
    state.count++
  },

  [M.SET_ROUTE_INFO]: (state, value) => {
    state.routeInfo = value
  },
}
