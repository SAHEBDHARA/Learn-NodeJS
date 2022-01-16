                         
                                             /** Working with file  */


const fs = require("fs") 

//this is acynchronus code for file hande ling 

fs.readFile("file.txt",'utf8',(err,data)=>{
    if(err) throw error;
    console.log(data)
})

// synchronus code 

const data = fs.readFileSync("file.txt",{encoding:"utf-8",flag:"r"})

console.log(data)


// chack it is directary or file 

fs.stat('file.txt',(err,status)=>{
    if(err){
        console.error(error);
    }
    console.log(status.isFile());
    console.log(status.isDirectory());
})