//creating first http message 
// let fs=require('fs');

// fs.writeFileSync('hello.txt','hi this is content of hello file');
// console.log('hello its done')
    
//require is global method/ keyword and http is global module
// const http=require('http');


// const server=http.createServer((req,res)=>{
//     console.log('method:',req.method);
//     console.log('url:',req.url);
//     console.log('headers:',req.headers);

//     res.write('hello from server');
//     res.end();


// });
// server.listen(8100,()=>{
//     console.log('server running at http://localhost:8100');
// });

//just with an html page 

// const http=require('http');


// const server=http.createServer((req,res)=>{
//     console.log(req.url,req.method,req.headers);


   
//     res.setHeader('Content-type','text/html');
//     res.write('<html></html>');
//     res.write('<body><h1>this html body</h1></body>')
//     res.end();


// });
// server.listen(8100,()=>{
//     console.log('server running at http://localhost:8100');
// });

// //simple one 
// const http=require('http');
// const fs=require('fs');

// const server=http.createServer((req,res)=>{
//     const url=req.url;
//     const method=req.method;
//     if (url==='/'){
//         if (url === '/') {
//             res.write('<html>');
//             res.write('<head><title>Enter the message</title></head>');
//             res.write('<body>');
//             res.write('<form action="/message" method="POST">');
//             res.write('<input type="text" name="message">');
//             res.write('<button type="submit">Send</button>');
//             res.write('</form>');
//             res.write('</body>');
//             res.write('</html>');
//             return res.end();
//         }
        
        
//         return res.end();

//     }
//     if(url==='/message' && method==='POST'){
//         fs.writeFileSync('message.txt','dummy text' );
//         res.statusCode=302;
//         res.setHeader('location','/');
//         return res.end();

//     }
//     res.setHeader('Content-type','text/html');
//     res.write('<html>');
//     res.write('<body><h1>this is html body</h1></body>');
//     res.write('</html>');
//     res.end();


// });
// server.listen(3000);

//simple two files access like routing requests by users
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);


