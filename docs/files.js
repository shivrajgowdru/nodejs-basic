
const fs=require("fs")
//reading files

fs.readFile("./docs/text1.txt" , (err,data) => {
  if(err){
    console.log(err)
  }
  else{ 
   window.setInterval(
     console.log(data.toString())
   )[3000]
  }
})


//writing files
// fs.writeFile('./docs/text2.txt' , 'hello, there' , () => {
//     console.log("text written")
  
// })


//directories

// fs.mkdir('./docs' , (err) => {
//   if(err){
//      console.log(err)
//   }
//   console.log('folder created')
// })

//deleting files

// if (fs.existsSync("./docs/text2.txt")){
//   fs.unlink("./docs/text2.txt" , () => {
//     console.log("file deleted")
//   }) 

// }


