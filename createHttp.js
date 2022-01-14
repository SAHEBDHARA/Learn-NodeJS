

/**                                     HTTP server                         */

const http = require("http");

const hostname = '127.0.0.1'
const port = 3000;

http.createServer((req,res)=>{
    res.writeHead(200,{'containt-type':'text/plain'})
    res.write("Welcome to the server")
    res.end();
}).listen(port,hostname,()=>{
    console.log(`server running at http;//${hostname}:${port}/`);
})

// stop the server using ctrl+c
