const { resolve } = require('path')

module.exports = {
  sourceType: 'module',
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: true
        }
      }
    ]
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
    '@babel/syntax-import-assertions',
    'babel-plugin-transform-import-meta',
    [
      'search-and-replace',
      {
        rules: [
          {
            searchTemplateStrings: true,
            search: 'import.meta.url',
            replace: resolve(__dirname, 'workers')
          }
        ]
      }
    ]
  ]
}
