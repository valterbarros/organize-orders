module.exports = {
  resolve: {
    /**
     * The compiler-included build of vue which allows to use vue templates
     * without pre-compiling them
     */
    alias: {
        'vue$': 'vue/dist/vue.esm.js',
    },
    extensions: ['*', '.vue', '.js', '.json'],
  }
}