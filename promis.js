

/**                                                     PROMISES                                        */



let promise = new Promise(function(resolve,reject){
    setTimeout(()=>resolve("run before"),1000)
});
promise.then(
    result=>{
        console.log(result)
        getAfter()
    },
    error=>{
    console.log(error);
   }
)
function getAfter(){
    console.log("run after ")
}


// promise can make a code ashinchonus

// 