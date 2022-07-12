// Path : 해당 파일의 경로를 나타내줌

const path = require('path')
const fs = require('fs')

const filePath = path.resolve(__dirname, './Test')
console.log('filePath', filePath)
const fileContent = fs.readFileSync(filePath, 'utf-8')
console.log(fileContent)
