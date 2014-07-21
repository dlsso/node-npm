var glob = require('glob')

var list = glob.sync("*.js")

console.log(list)