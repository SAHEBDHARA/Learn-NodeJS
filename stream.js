/**                               Streams                 */


// This is one of the fundementle method that powred node js application,
// They are the way to handle reading, writing filles netwark connunications and any kind of informations in an efficient way.

/** Adventages:
       memory efficiency & time efficiency
 */
 
       
const http = require("http");
const fs = require("fs")


//  In general way

// const server = http.createServer(function(req,res){
//     fs.readFile('text.JSON',(err,data)=>{
//         res.end(data);
//     })
// })

// server.listen(3000,()=>{
// console.log("Application is running")
// })


// istead of using this we are using stream


const server = http.createServer(function(req,res){
 const stream = fs.createReadStream('text.JSON');

 // using pipe method we are going to dsend a jonc of data to the http server.
 stream.pipe(res);
})
server.listen(3000,()=>{
    console.log("Application is running in 3000")
 })

