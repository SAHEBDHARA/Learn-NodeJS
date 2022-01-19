/**                                           Buffer                                               */

// buffer is going to take the data into bianarry number
// const buf = Buffer.from('hey')

// console.log(buf[0])
// console.log(buf[1])
// console.log(buf[2])

// console.log(buf.toString())


const buf =Buffer.alloc(4)
buf.write("Hey")

buf[1]= 111 //o
console.log(buf.toString())

// push 'o' in the string


