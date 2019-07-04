import Vue from 'vue'
import Vuex from 'vuex'
import { starshipsStore } from './starships/starships.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    starships: starshipsStore
  }
})
