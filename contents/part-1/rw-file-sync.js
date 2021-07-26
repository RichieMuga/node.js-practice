const { readFileSync, writeFileSync } = require('fs')

const soma = readFileSync('../contents/subfolder/man.txt', 'utf-8')
writeFileSync('../contents/subfolder/manmalo.txt', 'omolo')

console.log(soma)
