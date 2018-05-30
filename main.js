const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const products = [
  { "name": "Test product", "price": 100 }
];

app.get('/ping', function(req, res) {
  res.send({ "status": "pong" })
})

app.get('/products', function(req, res) {
  res.send(products)
})

app.post('/products', function(req, res) {
  products.push({
    "name": req.body.name,
    "price": req.body.price
  })
  res.send({"status": "okay"})
})

app.listen(process.env.PORT || 8001)
