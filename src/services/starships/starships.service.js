import {
  validateStarship,
  validateStarships
} from 'Services/starships/starships.schema.js'

export class StarshipsService {
  constructor () {
    this.baseURL = 'https://swapi.co/api'
  }

  async getStarshipList (url = '/starships') {
    const starshipsResponse = await fetch(`${this.baseURL}${url}`).then(res =>
      res.json()
    )

    if (validateStarships(starshipsResponse.results)) {
      return starshipsResponse
    }
    console.error('Validate failed')
    return {
      results: [],
      previous: null,
      next: null,
      count: 0
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
