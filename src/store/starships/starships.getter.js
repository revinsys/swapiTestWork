export const starshipsGetters = {
  starships: state => state.starships,
  starship: state => state.starship,
  paginations: state => state.paginations,
  searchText: state => state.search
}

export default {
  starshipsGetters
}
