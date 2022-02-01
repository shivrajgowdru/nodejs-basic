const fs = require('fs')

const readStream = fs.createReadStream("./docs/text1.txt", {bufferEncoding : 'utf8'})

readStream.on('data' , (chunk) => {
  console.log("new chunk")
  console.log(chunk.toString())
})