import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    detailData:''
  },
  mutations: {
    setData(state,{id}) {
      state.detailData = id;
    }
  },
  actions: {
  },
  modules: {
  }
})
