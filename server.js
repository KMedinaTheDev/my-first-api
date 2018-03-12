const http = require('http');
const fs = require('fs')
const url = require('url');
const figlet = require('figlet');
var querystring = require('querystring');

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  var params = querystring.parse(url.parse(req.url).query);
  console.log(page.slice(0,6));
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/tolle') {
    fs.readFile('index2.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/dube') {
    fs.readFile('index3.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
    else if (page == '/api') {
      if('student' in params){
        if(params['student']== 'karen'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          var objToJson = {
            name: "karen",
            age: "26 y/o",
            quote: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
            inkBlot:"images/ink2.png"
          }
          res.end(JSON.stringify(objToJson));
        }
        if(params['student']== 'noName')
          {
              res.writeHead(200, {'Content-Type': 'application/json'});
              var objToJson =
              {
                name: "noName",
                age: "awake",
                quote: "Trying to define yourself is like trying to bite your own teeth.",
                inkBlot:"images/ink4.png"
              }
              res.end(JSON.stringify(objToJson));
            }
        if(params['student'] != 'karen' && params['student'] != 'noName')
        {
          // console.log("hi")
          res.writeHead(200, {'Content-Type': 'application/json'});
          var objToJson =
          {
            name: "unknown",
            age: "unknown",
            quote: "No valid plans for the future can be made by those who have no capacity for living now.",
            inkBlot:"images/ink3.png"
          }
          res.end(JSON.stringify(objToJson));
        }
      }
    }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }
  else if (page == "/css/style2.css") {
    fs.readFile('css/style2.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }
  else if (page == "/css/style3.css") {
    fs.readFile('css/style3.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  else if (page == "/js/main2.js") {
    fs.readFile('js/main2.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  else if (page == "/js/main3.js") {
    fs.readFile('js/main3.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  // else if (page.slice(0,7) == "/images") {
  //   console.log("hola");
  // }

  else if (page == "/images/luckydube.jpg") {
    fs.readFile('images/luckydube.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == "/images/luckydube.png") {
    fs.readFile('images/luckydube.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == "/images/ink2.png") {
    fs.readFile('images/ink2.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == "/images/ink4.png") {
    fs.readFile('images/ink4.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/html'});
      res.write(data);
      res.end();
    });
  }
  else if(page == "/images/ink3.png"){
    fs.readFile('images/ink3.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/html'});
      res.write(data);
      res.end();
    });
  }
  else{
    figlet('404!! (*o*) Something went wrong (*0*) ', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
