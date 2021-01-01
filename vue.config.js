const path = require('path');
const DevPort = 9527;
const MockPort = 9528
const name = '5G工业网关'
const config = require('./package.json')
const ZipPlugin = require('zip-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    port: DevPort,
    open: true,
    // https:true,
    overlay: {
      warnings: false,
      errors: true
},
 before: require('./mock/mock-server.ts'),
    progress: false
  }, 
  configureWebpack: {
    name: '5G工业网关',
    resolve: {
      alias: {
        '@': resolve('src'),
        '#': resolve('src/components')
      }
    },
    devtool: 'source-map',
    plugins: [
      new ZipPlugin({
        path: './',
        filename: config.name + '.zip'
      })
    ]
  },
  chainWebpack(config) {
    config.plugin('html').tap(args => {
      args[0].title = name
      return args
    }),
      config.plugin('preload').tap(() => [
        {
          rel: 'preload',
          fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
          include: 'initial'
        }
      ])
    config.plugins.delete('prefetch')
    config.when(process.env.NODE_ENV !== 'development',
      config => {
        config
          .optimization.splitChunks({
            chunks: 'all',
            cacheGroups: {
              libs: {
                name: 'chunk-libs',
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
                chunks: 'initial'
              },
              elementUI: {
                name: 'chunk-elementUI',
                priority: 20,
                test: /[\\/]node_modules[\\/]_?element-ui(.*)/
              },
              commons: {
                name: 'chunk-commons',
                test: path.resolve(__dirname, 'src/components'),
                minChunks: 3, //  minimum common number
                priority: 5,
                reuseExistingChunk: true
              }
            }
          })
        config.optimization.runtimeChunk('single')
      }
    )
  },
}
