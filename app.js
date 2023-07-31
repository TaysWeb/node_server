// here im setting a variable http to the require function
var http = require('http');
// this next line creates the server as a function with the parameters which is the (response and the required)
var server = http.createServer(function(req, res){

    if (req.url == '/') {
     // set response header 
       res.writeHead(200, {'Content-Type': 'text/plain'});
        // set response content    
        res.write('Hey there Little Human'); // this is my output
       res.end();
    }
       else {
       res.end('Invalid Request!'); 
       }
       });
       
       server.listen(5000); // like an event listener that the browser listens for 
       console.log('Node.js web server at port 5000 is running..') // this is what displays  IN TERMINAL before  you type your http URL

// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(5000);