const http = require("http");

const server = http.createServer((req, res)=>{
    // console.log(req.url);
    if(req.url=="/"){
    res.end('Hello from the main page sides');
    }else if(req.url=="/about"){
    res.end('Hello from the about page sides');
    }else if(req.url=="/contact"){
    res.end('Hello from the contact page sides');
   }else{
    res.writeHead('404', {'content-type': "text/html"});
   res.end('<h1>page does not exit 404 error</h1>');
    }
})

server.listen(3000, "localhost", ()=>{
    console.log('listing the port on the 3000');
});