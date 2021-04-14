const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.export = {
  publicPath: "/",
  outputDir: "dist",

  // devServer: {
  //   port: 8888,
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:8088",
  //       // target:"http://www.miluyiguan.club:8088",
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/api": ""
  //       }
  //     }
  //   },
  //   overlay: {
  //     warnings: false,
  //     errors: true
  //   }
  //   // before: require('./mock/mock-server.js')
  // },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: "红警",
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  }
};
