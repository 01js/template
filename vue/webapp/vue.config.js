const path = require('path')
const srcRoot = path.resolve(__dirname, 'src')
const merge = require('webpack-merge')
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          resources: srcRoot + '/styles/common.scss'
          // Or array of paths
          // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
        })
        .end()
    })
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        });
        return options;
      });
  }
}
