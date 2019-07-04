import { getPageNumber } from 'Helpers/PageHelper'
import { getIdByUrl } from 'Helpers/GetId'

export const starshipsMutations = {
  setStarships (state, starships) {
    state.starships = starships.map(starship => ({
      ...starship,
      id: getIdByUrl(starship.url)
    }))
  },
  setStarship (state, starship) {
    state.starship = starship
  },
  setPage (state, page) {
    state.page = page
  },
  setSearchText (state, search) {
    state.search = search
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
