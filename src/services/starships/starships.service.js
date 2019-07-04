import {
  validateStarship,
  validateStarships
} from 'Services/starships/starships.schema.js'

export class StarshipsService {
  constructor () {
    this.baseURL = 'https://swapi.co/api'
  }

  async getStarshipList (page = 1, search = null) {
    let url = `${this.baseURL}/starships/?page=${page}`
    if (search !== null) {
      url += `&search=${search}`
    }
    try {
      const starshipsResponse = await fetch(url).then(res => res.json())

      if (validateStarships(starshipsResponse.results)) {
        return starshipsResponse
      }
      throw new Error('Validate failed')
    } catch (e) {
      console.error(e)
      return {
        results: [],
        previous: null,
        next: null,
        count: 0
      }
    }
  }

  async getStarship (id) {
    const starshipResponse = await fetch(
      `${this.baseURL}/starships/${id}`
    ).then(res => res.json())

    if (validateStarship(starshipResponse)) {
      return starshipResponse
    }
    console.error('Validate failed')
    return null
  }
}

export const starshipsService = new StarshipsService()
