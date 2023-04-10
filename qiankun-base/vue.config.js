const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer:{
    port: 3013,
    headers:{
      'Access-Control-Allow-Origin': '*',
    }
  },
  transpileDependencies: true
})
