const{readFile,writeFile}=require('fs').promises

const start = async()=>{
    try {
    const first= await readFile('./contents/first.txt','utf8')
    const second= await readFile('./contents/second.txt','utf8')
    writeFile('./contents/writtenfile.txt',`this is both files combined ${first}, ${second}`,{flag:'a'})

    console.log(first,second)

    } catch (error) {
        console.log(error)
    }
    
}
start()