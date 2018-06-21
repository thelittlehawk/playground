const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const items = [
  { "image": "milk", "title": "Milk", "description": "Milk is a white liquid produced by the mammary glands of mammals. It is the primary source of nutrition for infant mammals before they are able to digest other types of food.", "quantity": 20, "price": 1 },
  { "image": "chocolate", "title": "Milk", "description": "Chocolate is a typically sweet, usually brown food preparation of Theobroma cacao seeds, roasted and ground. It is made in the form of a liquid, paste, or in a block, or used as a flavoring ingredient in other foods.", "quantity": 50, "price": 2 }
];

const purchases = [];

const images = [
  { "image": "milk", "url": "https://image.freepik.com/free-vector/milk-bottle_1020-433.jpg" },
  { "image": "chocolate", "url": "https://upload.wikimedia.org/wikipedia/commons/7/70/Chocolate_%28blue_background%29.jpg" }
]

app.get('/ping', function(req, res) {
  res.send({ "status": "pong" })
})

app.get('/items', function(req, res) {
  res.send(items)
})

app.get('/images', function(req, res) {
  res.send(images)
})

app.get('/orders', function(req, res) {
  res.send(orders)
})

app.post('/purchase', function(req, res) {
  req.body.purchase.map(x => purchases.push(x))
  res.send({ "status": "Purchased created!" })
})

// app.post('/login', function(req, res) {
//   if (req.params.email === "test@ssst.ba" && req.params.pass === "pass") {
//     res.send({"status": "valid"})
//   } else {
//     res.send({"status": "invalid"})
//   }
// })
// app.get('/products', function(req, res) {
//   res.send(products)
// })
//
// app.get('/products/:id', function(req, res) {
//   res.send(products[req.params.id])
// })
//
// app.delete('/products/:id', function(req, res) {
//   products.splice(req.params.id, 1)
//   res.send({"status": "deleted"})
// })
//
// app.post('/products', function(req, res) {
//   products.push({
//     "name": req.body.name,
//     "price": req.body.price
//   })
//   res.send({"status": "created"})
// })
//
// app.post('/products/array', function(req, res) {
//   req.body.products.map(x => products.push(x))
//   res.send({"status": "created"})
// })

app.listen(process.env.PORT || 8001)
