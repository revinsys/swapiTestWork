import { starshipsState } from './starships.state'
import { starshipsGetters } from './starships.getter'
import { starshipsMutations } from './starships.mutations'
import { starshipsActions } from './starships.actions'

export const starshipsStore = {
  namespaced: true,
  state: starshipsState,
  getters: starshipsGetters,
  mutations: starshipsMutations,
  actions: starshipsActions
}

export default {
  starshipsStore
}
