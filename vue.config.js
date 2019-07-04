const path = require('path')

function resolve (...dir) {
  return path.join(__dirname, ...dir)
}

module.exports = {
  devServer: {
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('Services', resolve('src', 'services'))
      .set('Locales', resolve('src', 'locales'))
      .set('Components', resolve('src', 'components'))
      .set('Store', resolve('src', 'store'))
      .set('Views', resolve('src', 'views'))
      .set('Helpers', resolve('src', 'helpers'))
      .set('App', resolve('src'))
  }
}
