const {readFile} =require('fs')

console.log('start task')

readFile('./contents/first.txt','utf-8',(result,err)=>{
    if (err) {
        return console.log(err)
    }
    console.log(result)
    console.log('completed first file')
})

console.log('start next task')