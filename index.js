var http = require('http'); 
var fs = require('fs'); 
var path = require('path');
const OS = require('os'); 

var port = 3000;
var hostname = '10.0.0.56';
let localhost = 'localhost';
var hostnames = Object.values(
    OS.networkInterfaces()
    ).reduce((r, list) => r.concat(
        list.reduce(
            (rr, i) => rr.concat(i.family==='IPv4' && !i.internal && i.address || []), []
            )), 
        []);
hostnames.push(localhost);

function send404(response) { 
    response.writeHead(404, { 'Content-Type': 'text/plain' }); 
    response.write('Error 404: Resource not found.'); 
    response.end(); 
} 

var mimeLookup = { 
    '.js': 'application/javascript', 
    '.html': 'text/html',
    '.css' : 'text/css',
    '.ttf': 'font/ttf',
    '.jpg': 'image/jpeg',
    '.ico': 'x-icon',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.ogv': 'video/ogg'
}; 

class newServer{
    constructor(){
        return http.createServer(function (req, res) {
            console.log(req.url);
              if (req.method == 'GET') { 
                   var fileurl; 
                  if (req.url == '/') 
                     fileurl = '/index.html'; 
                  else 
                     fileurl = req.url; 
                  var filepath = path.resolve('.' + fileurl); 
          
                  var fileExt = path.extname(filepath); 
                  var mimeType = mimeLookup[fileExt]; 
                  if (!mimeType) { 
                      send404(res); 
                      return;
                  }
                  fs.exists(filepath, function (exists) {
                      if (!exists) {
                          send404(res); 
                          return; 
                      };
                      res.writeHead(200, { 'content-type': mimeType }); 
                      fs.createReadStream(filepath).pipe(res);
                   }); 
               } else {
                   send404(res);
               } 
          })
    }
    
} 

// console.log(hostnames);

for(let x in hostnames){
    let server = new newServer();
    server.listen(port, hostnames[x], () => {
        console.log(`Server running at http://${hostnames[x]}:${port}/`);
    });
}
