import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    albums: []
  },
  mutations: {
    ['GET_DATA'](state,payload) {
      state.albums=payload;
    }
  }
})

export default store
