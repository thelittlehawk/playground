const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const items = [
  { "image": "milk", "title": "Milk", "description": "Milk is a white liquid produced by the mammary glands of mammals. It is the primary source of nutrition for infant mammals before they are able to digest other types of food.", "quantity": 20, "price": 1 },
  { "image": "chocolate", "title": "Chocolate", "description": "...", "quantity": 50, "price": 2 },
  { "image": "egg", "title": "Egg", "description": "Eggs are laid by female animals of many different species, including birds, reptiles, amphibians, mammals, and fish, and have been eaten by humans for thousands of years.", "quantity": 50000000, "price": 1 },
  { "image": "butter", "title": "Butter", "description": "Butter is a dairy product containing up to 80% butterfat which is solid when chilled and at room temperature in some regions and liquid when warmed.", "quantity": 2, "price": 6 },
  { "image": "meat", "title": "Meat", "description": "Meat is animal flesh that is eaten as food. Humans have hunted and killed animals for meat since prehistoric times. The advent of civilization allowed the domestication of animals such as chickens, sheep, rabbits, pigs and cattle.", "quantity": 1, "price": 30 },
  { "image": "vegetables", "title": "Vegetables", "description": "Vegetables are parts of plants that are consumed by humans as food as part of a meal.", "quantity": 30, "price": 10 }
];

const purchases = [];

const images = [
  { "image": "milk", "url": "https://image.freepik.com/free-vector/milk-bottle_1020-433.jpg" },
  { "image": "chocolate", "url": "https://upload.wikimedia.org/wikipedia/commons/7/70/Chocolate_%28blue_background%29.jpg" },
  { "image": "egg", "url": "https://cdn-image.realsimple.com/sites/default/files/styles/rs_horizontal_image_4/public/silo-brown-egg.jpg?itok=jtqm4Sas"},
  { "image": "butter", "url": "https://www.nifeislife.com/images/300/M00905.jpg" },
  { "image": "meat", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSujAYs3Rz3dbCP6WoIzO1GqR-9x7-ph3KSrXWSMvxcIDYz11ql" },
  { "image": "vegetables", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNn5NAf0Wc2v1cuyRjOAauSQMUScUVkOSnyIxYWMYXhBmhX1U9Q" }
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

app.get('/purchases', function(req, res) {
  res.send(purchases)
})

app.get('/orders', function(req, res) {
  res.send(purchases)
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
