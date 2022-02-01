const http  = require("http")
const fs= require('fs')
const _ = require("lodash")

const server = http.createServer((req,res) => {
  
  // lodash methods

  // const num = _.random(0,20);
  // console.log(num);

  // const greet = _.once(() => {
  //   console.log('hello')
  // })

  greet()
  greet()
//set header content type
res.setHeader('content-type' , 'text/html')

let path = '';
switch(req.url){
  case '/':
    path +='index.html';
    res.statusCode = 200
    break;
  case '/about':
    path += 'about.html';
    res.statusCode = 200
    break;
  default :
    path +='404.html';
    res.statusCode = 404
    break;
  }

fs.readFile(path , (err,data) => {
  if(err){
    console.log(err)
    res.end()
  }
  else{
   // res.write(data) if we need to pass multiple data for single data we can just write it in res.end(data)
    res.end(data)
  }
})

})



server.listen(8000,'localhost', () => {
  console.log(`listening on server 8000`)
})