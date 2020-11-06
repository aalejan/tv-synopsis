const express = require('express')
const app = express()
const showdata = require('./showdata')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  return res.render('index', { showdata })
})

app.get('/season/:id', (req, res) => {
  const season = showdata.seasons.find((season) => season.number === parseInt(req.params.id))

  return res.render('seasons', { season, show: showdata.title })
})

app.all('*', (req, res) => {
  return res.sendStatus(404)
})
app.listen(5000)
console.log('Listening to Port 5000')

