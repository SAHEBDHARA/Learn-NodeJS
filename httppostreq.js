

/**                                     HTTP POST request                                  */

 const axios = require("axios")

 const data = JSON.stringify({
     name:"Saheb dhara",
     Job:"Containt Writer"
 });





 axios.post('https://reqres.in/api/users',data).then(res =>{
     console.log(`status code:${res.status}`);
     console.log(`Body:${JSON.stringify(res.data)}`);

 }).catch(err =>{
     console.log(err)
 })


 // using axios library
