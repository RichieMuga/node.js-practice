
const EventEmmiter= require('events')

const customEvent= new EventEmmiter()

customEvent.on('response',(name,id)=>{
    console.log(`data recieved by user ${name} whose Id is ${id}`)
})
customEvent.on('response',()=>{
    console.log('data recieved a second time')
})

customEvent.emit('response','John',1234)

// THINGS TO NOTE WHEN USING EVENT EMMITERS.   
// 1.One can have more than one on event function.
// 2.The order matters i.e, once you use the on method(doesnt matter how many times),it has to be followed by the event emmiter method
// 3.heavily used in node although provided most of the time
// 4.one can pass in parameters and add in the event emmiter