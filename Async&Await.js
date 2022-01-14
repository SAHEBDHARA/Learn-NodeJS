

/**                                          Async&Await                                */


function clown(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("this is massage")
        },2000)
    })
}

 async function msg(calbak){
    const msg = await clown()
     console.log(msg)
     calbak()
}
msg(getResult)

// using callback 
function getResult(){
    console.log("this is the next massage")
}



// async makes a function asynchronus, 
//and await is a functin what waits for promises to return something like reject and resulve.