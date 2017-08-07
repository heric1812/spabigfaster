import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      auth: false
    },

    actions: {
      authChange: (context) => { context.commit('authChange') }
    },

    mutations: {
      authChange: (state) => { state.auth = !state.auth }
    },

    getters: {}
  })
}
