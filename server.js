const jsonserver = require('json-server')
const server = jsonserver.create()
const router = jsonserver.router('db.json')
const middlewares = jsonserver.defaults() // Disable static files

server.use(middlewares)
server.use(router)
server.listen(10000, () => {
  console.log('JSON Server is running')
})