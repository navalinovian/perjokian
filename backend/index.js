const express = require('express')
const app = express()
const port = 3000
const db = require('./queries.js')
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/category', db.getCategory)
app.get('/category/:id', db.getCategoryById)
app.post('/category', db.createCategory)
app.put('/category/:id', db.updateCategory)
app.delete('/category/:id', db.deleteCategory)

app.get('/product', db.getProduct)
app.get('/product/:uuid', db.getProductById)
app.post('/product', db.createProduct)
app.put('/product/:uuid', db.updateProduct)
app.delete('/product/:uuid', db.deleteProduct)