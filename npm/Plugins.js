const Plugins = [
  // demo jQuery
  {
    from: 'node_modules/jquery/dist/',
    to: 'public/plugins/jquery',
    filter: [
      'node_modules/jquery/dist/*.js',
      '!node_modules/jquery/dist/*.map',
      
    ]
  }
]

module.exports = Plugins
