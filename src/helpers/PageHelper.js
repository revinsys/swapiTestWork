export const getPageNumber = url => {
  return url !== null ? /\?page=(\d*)/g.exec(url)[1] : null
}

export default {
  getPageNumber
}
