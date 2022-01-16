


/**                                                ROUTING                                         */

// performing tasks for particular path is call routing 


const http = require("http");


const routs = {
    '/':function index(request,response){
        response.writeHead(200);
        response.end("node routing is running")
},

    '/aboutus':function aboutus(request,response){
        response.end("the is about us")
        }
}

// function index(request,response){
// response.writeHead(200);
// response.end("node routing is running")
// }

// function aboutus(request,response){
// response.end("the is about us")
// }

http.createServer(function(req,res){
    // if(req.url =="/"){
    //     return index(req,res)
    // }
    // if(req.url =="/aboutus"){
    //     return aboutus(req,res)
    // }

    if(req.url in routs){
        return routs[req.url](req,res)
    }
}).listen(process.env.PORT||8000);
