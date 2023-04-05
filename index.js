const http = require('http')
const app = require('./app')

const PORT = 3001
const server = http.createServer(app)



server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening to port ${PORT}`)
})