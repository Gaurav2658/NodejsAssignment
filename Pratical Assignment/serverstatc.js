const http = require('http')
const url = require('url')
const static = require('node-static');


const fileserver = new static.Server('./server');


var server = http.createServer(function(req,res){
    req.addListener('end',function(){
        fileserver.serve(req,res);
    }).resume();
}).listen(9000);
console.log("Listing on port number 9000");
