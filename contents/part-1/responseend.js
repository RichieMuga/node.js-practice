const http= require('http')

const server= http.createServer((req,res)=>{
    console.log('event has started')
    res.end('hello world')
})

server.listen(5000,()=>{
    console.log('listening to port 5000')
})