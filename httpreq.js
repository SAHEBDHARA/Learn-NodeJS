
/**                                               HTTP request                   */

const http = require("http")

http.get('http://api.open-notify.org/astros.json', res =>{
    let data =""
    res.on('data',hgh=>{
        data +=hgh
    });

    res.on('end',()=>{
    let jasondata = JSON.parse(data);
    console.log(jasondata)
    });
})