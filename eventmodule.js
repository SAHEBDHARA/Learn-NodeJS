

/**                           Event Module                  */

const events = require('events');


let ev = new events.EventEmitter();


// on method is used to create a new event

ev.on('my_event',function(data){
    console.log("enent:",data)
})


// once method 


// emite method is used to call the event

ev.emit('my_event','call emit() method to fire my_event')
;

ev.once("eventOnce",(code,msg)=>
console.log(`got${code} and ${msg}`)
)

ev.emit('eventOnce', 200,'ok');

// what if you unregistared the method, we have to use 'off' method 

var c1 = (code,msg)=>consolel.log(`got${code} and ${msg}`)

ev.off('eventOnce',c1)

ev.emit('eventOnce', 200,'ok');

