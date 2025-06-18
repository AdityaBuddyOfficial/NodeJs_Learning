const hello="hello"
console.log(hello);

const http=require('http');

//WEB SERVE
http.createServer((req,res)=>{
res.end('hello from the server')
})