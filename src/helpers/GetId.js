export const getIdByUrl = url => {
  return url !== null ? /\/(\d*)\/$/g.exec(url)[1] : null
}

export default {
  getIdByUrl
}
