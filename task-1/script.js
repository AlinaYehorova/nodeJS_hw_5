import http from 'http'

const server = http.createServer((request, response) => {
  if (!request.headers.authorization) {
    response.statusCode = 401
    response.setHeader('Content-Type', 'text/plain')
    response.end('Unauthorized')
  } else {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    response.end('Authorization header received')
  } 
})

server.listen(3000, 'localhost', () => {
  console.log(`Server running on http://localhost:3000`);
  
})