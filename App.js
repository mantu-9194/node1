const http=require("http");
http.createServer(function (request,response)
{  
response.write("<h1>Hey i m creating a server</h1>")
response.write("i m a normal text")
response.write(JSON.stringyfy({Name:"Mahantesh"}))
response.end("server ends");
})
.listen(5000)