const hello="hello"
console.log(hello);

const http=require('http');

const url=require('url');

//WEB SERVE
const server=http.createServer((req,res)=>{
    // console.log(req.url)
const pathName=req.url;

if(pathName==='/' || pathName==='/overview')
{
    res.end("this is overview")
}
else if(pathName==='/product'){
    res.end("this is Product")
}
else{
    res.writeHead(404,{
        'content-type':'text/html',
        'my-own-header':'hello-world'
    })
    res.end('<h1>page not found</h1>')
}

});

// res.end("this is hello from the server")

server.listen(8000,'127.0.0.1',()=>{
    console.log("Listening to request on port 8000")
})
