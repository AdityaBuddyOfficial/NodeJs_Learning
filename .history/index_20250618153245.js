const hello="hello"
console.log(hello);

const http=require('http');

//WEB SERVE
const server=http.createServer((req,res)=>{
    console.log(req)
res.end('hello from the server')
});

server.listen(8000,'127.0.0.1',()=>{
    console.log("Listening to request on port 8000")
})