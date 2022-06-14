// HTTP 모듈 로드
var http = requier('http');

// HTTP 서버 구성
var server = http.createServer(function (request, response) {

  response.writeHead(200, {"Content-Type" : "text/plain"});

  response.end("Hello World\n");
});

// Set Port 8000
server.listen(8000);

// print Log
console.log("Server running at http://127.0.1:8000/");
