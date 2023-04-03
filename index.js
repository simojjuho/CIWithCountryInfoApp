const express = require('express')
const app = express()

app.use(express.static('build'))
const PORT = 3001

app.get('/ping', (req, res) => {
  res.json({ message: 'pong!' })
})


if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening to port ${PORT}`)
  })
}

module.exports = app