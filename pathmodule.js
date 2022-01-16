


/**                                              Path Module                                          */

const path = require("path")

// file = path.basename('C:\project files\node js')
// dir = path.dirname('C:\project files\node js')
// abs = path.isAbsolute('C:\project files\node js')

// console.log(file)
// console.log(dir)
// console.log(abs)

let dir =' project file '

file = path.join('C:','Desktop\saheb',dir,'node js')

parse = path.parse('C:\project files\node js')


console.log(file)
console.log(parse)