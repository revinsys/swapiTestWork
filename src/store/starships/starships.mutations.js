import { getPageNumber } from 'Helpers/PageHelper'

export const starshipsMutations = {
  setStarships (state, starships) {
    state.starships = starships
  },
  setStarship (state, starship) {
    state.starship = starship
  },
  setPage (state, page) {
    state.page = page
  },
  setPaginations (state, paginations) {
    state.paginations = {
      next: getPageNumber(paginations.next),
      previous: getPageNumber(paginations.previous)
    }
  }
}

export default {
  starshipsMutations
}
