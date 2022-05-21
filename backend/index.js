const express = require('express')
const app = express()
const port = 3000
const db = require('./queries.js')
var bodyParser = require('body-parser')
const cors = require("cors");
const {sequelize, Category} = require('./models')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, async () => {
  console.log(`Album Store app listening on port ${port}`)
  await sequelize.authenticate()  
  console.log('Database Connected!');
})

app.get('/category', async(req, res)=>{
  try {
    const categories = await Category.findAll()

    return res.json(categories)
  } catch (error) {
    console.log(error);
    return res.status(500).json({error:'Something went wrong'})
  }
})
app.get('/all-categories', db.getAllCategory)
app.get('/category/:id', db.getCategoryById)
app.post('/category', db.createCategory)
app.put('/category/:id', db.updateCategory)
app.delete('/category/:id', db.deleteCategory)
app.delete('/del-category/:id', db.hardDeleteCategory)


app.get('/product', db.getProduct)
app.get('/product/:uuid', db.getProductById)
app.post('/product', db.createProduct)
app.put('/product/:uuid', db.updateProduct)
app.delete('/product/:uuid', db.deleteProduct)

app.get('/user', db.getUser)
app.get('/user/:uuid', db.getUserById)
app.post('/user', db.createUser)
app.patch('/user/:uuid', db.updateUser)
app.delete('/user/:uuid', db.deleteUser)

app.get('/role', db.getRole)
app.get('/role/:id', db.getRoleById)
app.post('/role', db.createRole)
app.put('/role/:id', db.updateRoleById)
app.delete('/role/:id', db.deleteRole)