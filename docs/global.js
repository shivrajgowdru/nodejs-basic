setTimeout(() => {
  console.log('time interval')
  clearInterval(int)
}, 3000);

const int =setInterval(()=>{
  console.log("in the interval")
},1000)

console.log(__dirname)
console.log(__filename)