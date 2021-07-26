 const path = require('path');
 console.log(path.sep)
 const filepath = path.join('contents','subfolder','man.txt')
 console.log(filepath)
 const base = path.basename(filepath);
 console.log(base)
 const resolve = path.resolve(__dirname,filepath)
 console.log(resolve)