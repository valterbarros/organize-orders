const { environment } = require('@rails/webpacker')
const vue =  require('./loaders/vue')
const vue_template_compile = require('./vue_template_compile')

environment.loaders.append('vue', vue)
environment.config.merge(vue_template_compile)
module.exports = environment
