//Event Emmiter with http module
const http= require('http')
//Using EventEmmiter API
const server= http.createServer()

server.on('request',(res,req)=>{
    res.end('hello')
})

server.listen(5000,()=>{
    console.log('port is listening')
})