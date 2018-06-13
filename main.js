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

app.post('/login', function(req, res) {
  if (req.params.email === "test@ssst.ba" && req.params.pass === "pass") {
    res.send({"status": "valid"})
  } else {
    res.send({"status": "invalid"})
  }
})

app.get('/products', function(req, res) {
  res.send(products)
})

app.get('/products/:id', function(req, res) {
  res.send(products[req.params.id])
})

app.delete('/products/:id', function(req, res) {
  products.splice(req.params.id, 1)
  res.send({"status": "deleted"})
})

app.post('/products', function(req, res) {
  products.push({
    "name": req.body.name,
    "price": req.body.price
  })
  res.send({"status": "created"})
})

app.listen(process.env.PORT || 8001)
