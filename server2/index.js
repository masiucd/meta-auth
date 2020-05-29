/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

let database

sqlite
  .open({ driver: sqlite3.Database, filename: 'database.sqlite' })
  .then((database_) => {
    database = database_
  })

app.get('/', (request, response) => {
  database
    .all(
      'SELECT products.productName, products.description, products.category, products.image, products.price, ingredients.name, productIngredients.volume, productIngredients.measure FROM ingredients INNER JOIN productIngredients ON ingredients.ingredientId = productIngredients.ingredient_Id INNER JOIN products ON productIngredients.product_Id = products.productId',
    )
    .then((products) => {
      const newObjects = []
      for (let i = 0; i < products.length; i++) {
        const checkUsername = (obj) => obj.name === products[i].productName
        if (!newObjects.some(checkUsername)) {
          const newOb = {
            name: products[i].productName,
            description: products[i].description,
            category: products[i].category,
            image: products[i].image,
            price: products[i].price,
            ingredients: [
              {
                name: products[i].name,
                volume: products[i].volume,
                measure: products[i].measure,
              },
            ],
          }
          newObjects.push(newOb)
        } else {
          for (let x = 0; x < newObjects.length; x++) {
            if (products[i].productName === newObjects[x].name) {
              const newIng = {
                name: products[i].name,
                volume: products[i].volume,
                measure: products[i].measure,
              }
              newObjects[x].ingredients.push(newIng)
            }
          }
        }
      }

      response.send(newObjects)
    })
})

app.listen(3000, () => {
  console.log('server is on 3000')
})
