const { readFile,writeFile}=require('fs')

readFile('./contents/poopooman.txt','utf-8',(err,result)=>{
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./contents/first.txt','utf-8',(err,result)=>{
    if (err) {
        console.log(err)
        return
    }
    const second = result

    writeFile('./contents/second.txt','utf-8',()=>{
        console.log(`your content is ${first} and ${second}`)
        })
    })
})