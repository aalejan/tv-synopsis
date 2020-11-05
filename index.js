const express = require('express')
const app = express()
const kimC = require('./kim')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', { kimC })
})

app.all('*', (req, res) => {
  return res.sendStatus(404)
})
app.listen(5000)
console.log('Listening to Port 5000')
