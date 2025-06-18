const hello="hello"
console.log(hello);

const http=require('http');

// const url=require('url');

//WEB SERVE
const server=http.createServer((req,res)=>{
    console.log(req.url)
const pathName=req.url;

if(pathName==='/' || pathName==='/overview')
{
    res.end("this is overview")
}
else if(pathName==='/product'){
    res.end("this is Product")
}
else{
    res.writeHead(404)
    res.end("404-page not found")
}

});

res.end("this is hello from the server")

server.listen(8000,'127.0.0.1',()=>{
    console.log("Listening to request on port 8000")
})
