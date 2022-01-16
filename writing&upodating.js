

//**                                        Writing and updating file                                       */


const fs = require("fs")


// // sync code 
// content =[{
//     type:"organic"
// }]

// fs.writeFileSync('text.JSON',JSON.stringify(content))


 // 

 const data = "Wellcome to node"

 fs.writeFile('file.txt',data,{flag:'a+'},err=>{
     if(err){
         console.log(error)
         return
     }
     console.log("Successfully done")

 })

 // flag- 
 // a+ - open the file reading and writing and positioning the string at the end of the file
 //a - open the file for writing and positioning the string at the end 
 // r+ - open the file for reading and writing
 // w+ - open the file for reading and writing and positioning the string at the begining and remove the first content 
 //  using the flag you can update our data of your file 


 // for deleting and unlink file

 fs.unlink('goto.txt',err=>{
     if(err){
         console.error(error);
         return
     }
     console.log("file unlinked")
 })

 //