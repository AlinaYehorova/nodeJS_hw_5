import http from 'http'

const port = process.env.PORT || 3020;

const server = http.createServer((req, res) => {
  

  if (req.method === 'PUT') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('PUT-request has been processed')

  } else if (req.method === 'DELETE') {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end('DELETE-request has been processed')

    } 
    else {
      res.statusCode = 405 
      res.setHeader('Content-Type', 'text/plain')
      res.end('The method is not supported');
    }
})

server.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
})