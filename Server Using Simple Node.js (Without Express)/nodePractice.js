const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

let home = fs.readFileSync('./index.html', 'utf-8')
let about = fs.readFileSync('./about.html', 'utf-8')
let contact = fs.readFileSync('./contact.html', 'utf-8')
let service = fs.readFileSync('./service.html', 'utf-8')

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  req = req.url
  res.setHeader('Content-Type', 'text/html');
  if(req == '/'){
    res.end(home);
  }
  else if(req == '/about'){
    res.end(about);
  }
  else if(req  == '/contact'){
    res.end(contact);
  }
  else if(req == '/service'){
    res.end(service);
  }
  else {
    res.end('ERROR 404 NOT FOUND');
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});