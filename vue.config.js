const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : "/";
const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  // 颗粒化配置webpack
  chainWebpack: config => {
      config.resolve.alias
        .set('@', resolve('src'))
        .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 跨域
  devServer: {
      port: '8088',
      // 对于任何没有匹配到静态文件的任何请求都代理到proxy路径
    //   proxy: {
        //   '/test': {
        //     target: 'http://localhost:8080',
        //     ws: false, // 代理webSocket
        //     // 将主机标头的原点更改为目标URL
        //     changeOrigin: true
        //   }
    //   }
  }
}
