/***
 * 
 */
// Shinchronus function using callback
// function getMassage(){
//     // console.log("get massage");  
//     setTimeout(()=>{
//         console.log("get massage");
//     },1000)
    
// }
// function displayMassage(){
//     console.log("display massage");
// }

// getMassage()
// displayMassage()
// callback is a func that pass into another function as an argument


console.log("request 1");
setTimeout(callback,5000)
console.log("request 2");
setTimeout(callback,5000)

console.log("request 3");
setTimeout(callback,5000)


function callback(){
    console.log("wait for 5 min")
}
/**           A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished   */



