import connectAPI from '@/services/connectAPI'
import { createStore } from 'vuex'

export default createStore({
  state: {
    controler : new connectAPI(),
    donneeVelib : {},
    stationChoisi:{},
    donneeEnCours:{}
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
