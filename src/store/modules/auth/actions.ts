import { ActionTree } from 'vuex'
import { RootState } from '../../index'
import { AuthState, User } from '.'
import { M } from './mutations'
import { axios } from '@/middlewares/api/axios'

export const actions: ActionTree<AuthState, RootState> = {
  async initAuth({ commit }) {
    commit(M.LOAD_AUTH_TOKEN)
    commit(M.LOAD_CURRENT_USER)
  },

  // 로그인
  async signIn({ commit }, data: User) {
    //
    try {
      const res = await axios.post('users/signin', data)
      if (!res.data.result) {
        return res.data
      }

      commit(M.SET_AUTH_TOKEN, res.data.token)
      commit(M.SET_CURRENT_USER, res.data.user)

      return true
    } catch (err) {
      console.error(err)
      return false
    }
  },

  // 로그아웃
  async signOut({ commit, state }) {
    //
    try {
      const res = await axios.post('users/signout', state.authToken)
      if (!res.data.result) {
        return res.data
      }

      commit(M.REMOVE_AUTH_TOKEN)
      commit(M.REMOVE_CURRENT_USER)

      location.reload()

      return true
    } catch (err) {
      console.error(err)
      return false
    }
  },

  // 가입
  async signUp({ commit, state }, data: User) {
    //
    try {
      const res = await axios.post('users', data)
      console.log('응답', res.data)
    } catch (err) {
      console.error(err)
    }

    // 로그인 #TODO

    /*
    if (state.count < 10) {
      commit(M.INCREMENT)
    }*/
  },

  checkEmail: async (_, email: string) => {
    try {
      const res = await axios.post('users/check-email', { email })
      return res.data?.exist as boolean
    } catch (err) {
      console.error(err)
      return null
    }
  },
}
