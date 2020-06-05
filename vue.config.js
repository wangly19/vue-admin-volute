const LoginData = require('./mock/login.json')

const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
// 项目的主要配置文件
module.exports = {
  outputDir: 'build',
  assetsDir: 'src',
  lintOnSave: process.env.NODE_ENV === 'development',
  chainWebpack: config => {
    config.module.rule('svg').uses.clear()
    config.module.rule('svg1').test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    config.resolve
      .alias
      // 根目录
      .set('@', resolve('src'))
      // 资源
      .set('^', resolve('/src/assets'))
      // 接口
      .set('#', resolve('/src/api'))
  },
  devServer: {
    port: 8400,
    proxy: {
      '/api': {
        target: 'http://localhost:8400/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px-to-viewport')({
            unitToConvert: 'px',
            viewportWidth: 1440,
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vw',
            mediaQuery: false,
            minPixelValue: 4
          })
        ]
      },
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#5673FF',
            'link-color': '#5673FF',
            'border-radius-base': '2px',
            "error-color": '#FF8282',
            'success-color': '#05CAAE',
            'warning-color': '#FFAA2E',
            'text-color': '#303753',
            'border-radius-base': '4px'
          },
          javascriptEnabled: true
        }
      },
      sass: {
        prependData: `@import "~@/assets/scss/reset.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },    
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }    
        }        
      ]    
    }
  }
}
