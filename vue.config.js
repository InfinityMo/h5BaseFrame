module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    open: true,
    compress: true,
    proxy: {
      [process.env.VUE_APP_API]: {
        target: 'http://172.165.216.156',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true,
        logLevel: 'debug'
      }
    }
  }
}
