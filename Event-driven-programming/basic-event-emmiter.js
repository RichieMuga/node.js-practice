const EventEmmiter= require('events')

const customEvent= new EventEmmiter()

customEvent.on('response',()=>{
    console.log('data recieved')
})

customEvent.emit('response')