const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  lintOnSave: false,

  devServer:{
    proxy :{
      '^/api' :{
        target: 'http://localhost:8080/',
        changeOrigin: true,
        ws: false,

      }
    }
  }
};
