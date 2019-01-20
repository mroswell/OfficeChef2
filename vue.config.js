module.exports = {
  baseUrl: '/OfficeChef/',
  outputDir: 'dist',
  runtimeCompiler: false,
  productionSourceMap: false,
  parallel: true,
  configureWebpack: {
    optimization: {
      minimize: true,
      splitChunks: {
        minSize: 10000,
        maxSize: 50000,
        chunks: 'all'
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('VuetifyLoaderPlugin')
  }
}
