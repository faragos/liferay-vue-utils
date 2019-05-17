let liferayConfig
try {
  liferayConfig = require('./liferay.vue.config')
} catch (ex) {
  liferayConfig = liferayConfig || {}
  liferayConfig.protocol = 'http'
  liferayConfig.host = ''
  liferayConfig.port = 3000
}

const path = require('path')

module.exports = {
  configureWebpack: {
    devtool: 'eval-source-map',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/main/resources/META-INF/resources/lib/')
      }
    }
  },
  pages: {
    index: {
      entry: 'main.js',
    },
  },
  devServer: {
    port: liferayConfig.port,
    host: liferayConfig.host,
    proxy: liferayConfig.protocol + '://' + liferayConfig.host + ':' + liferayConfig.originPort
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
    }
  }
}