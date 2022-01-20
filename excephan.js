/**                                 exception handeling                  */

// throw new Error('error message')

// stracture of try and catch method
try {
    console.log("sart try block")
    lala;
}catch(err){
    console.log("error")
}


doSomething1()
.then(doSomething2)
.then(doSomething3)
.catch(err=>console.log(err))


