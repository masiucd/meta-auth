/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ recipes: [], products: [], cart: [] }).write()

const app = express()

app.use(express.json())

const port = 5000

app.get('/recipes', (req, res) => {
  const recipes = db.get('recipes')
  res.send(recipes)
})
app.get('/products', (req, res) => {
  const recipes = db.get('products')
  res.send(recipes)
})
app.get('/cart', (req, res) => {
  const recipes = db.get('cart')
  res.send(recipes)
})

app.post('/products', (req, res) => {
  db.get('products')
    .push(req.body)
    .assign({ id: Date.now().toString() })
    .write()
  res.send('success')
})

app.post('/recipes', (req, res) => {
  db.get('recipes')
    .push(req.body)
    .last()
    .assign({ id: Date.now().toString() })
    .write()
  res.send('success')
})

// add to cart
app.post('/cart', (req, res) => {
  db.get('cart').push(req.body).assign({ id: Date.now().toString() }).write()
  res.send('success')
})

app.listen(port, () => {
  console.log(`server is on port ${port}`)
})
