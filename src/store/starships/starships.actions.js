import { starshipsService } from 'Services/starships/starships.service'

export const starshipsActions = {
  async getStarships ({ commit, state }) {
    const { page, search } = state
    const starshipsResult = await starshipsService.getStarshipList(page, search)
    const { results, ...paginations } = starshipsResult
    commit('setStarships', results)
    commit('setPaginations', paginations)
  },
  async getStarship ({ commit }, id) {
    const starship = await starshipsService.getStarship(id)
    commit('setStarship', starship)
  },
  setPage ({ commit }, page) {
    commit('setPage', page)
  }
}

export default {
  starshipsService
}
