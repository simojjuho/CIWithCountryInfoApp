const express = require('express')
const app = express()

app.use(express.static('build'))


app.get('/ping', (req, res) => {
  res.json({ message: 'pong!' })
})

module.exports = app