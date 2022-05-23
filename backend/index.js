const express = require('express')
const app = express()
const port = 3000
const db = require('./queries.js')
var bodyParser = require('body-parser')
const cors = require("cors");
const { sequelize, Category, Product } = require('./models')

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

app.get('/category', async (req, res) => {
  try {
    const categories = await Category.findAll()

    return res.json(categories)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Something went wrong' })
  }
})

app.get('/all-categories', async (req, res) => {
  try {
    const categories = await Category.findAll({ paranoid: false })
    return res.json(categories)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Something went wrong' })
  }
})

app.get('/category/:id', async (req, res) => {
  const id = req.params.id
  try {
    const categories = await Category.findOne({
      where: { id: id }
    })
    return res.json(categories)
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: 'Not Found!' })
  }
})

app.post('/category', async (req, res) => {
  const { id, name } = req.body
  try {
    const category = await Category.create({
      id: id,
      name: name
    })
    return res.json(category)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Something went wrong' })
  }
})
app.put('/category/:id', async (req, res) => {
  const id = req.params.id
  const { name } = req.body
  const now = Date.now()
  try {
    const category = await Category.update({
      name: name,
      updatedAt: now
    }, {
      where: {
        id: id
      },
    })
    return res.json(category)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Something went wrong' })
  }
})
app.delete('/category/:id', async (req, res) => {
  const id = req.params.id
  try {
    const category = await Category.destroy({
      where: {
        id: id
      }
    })
    return res.json(category)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Something went wrong' })
  }
})
app.delete('/del-category/:id', async (req, res) => {
  const id = req.params.id
  try {
    const category = await Category.destroy({
      where: {
        id: id
      },
      force: true
    })
    return res.json(category)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Something went wrong' })
  }
})


app.get('/product', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [Category]
    })

    return res.json(products)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Something went wrong' })
  }
})

app.get('/product/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  try {
    const product = await Product.findOne({
      where: {
        id: uuid
      },
      include: [Category]
    })

    return res.json(product)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Something went wrong' })
  }
})

app.post('/product', async (req, res) => {
  const { name, price, stock, category_id } = req.body
  try {
    const category = await Category.findOne({
      where: {
        id: category_id
      }
    })

    const product = await Product.create({
      name: name,
      price: price,
      stock: stock,
      categoryId: category_id
    },{
      include:[Category]
    })
    return res.json(product)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Something went wrong' })
  }
})

app.put('/product/:uuid', async (req, res) => {
  const id = req.params.uuid
  const { name, price, stock, category_id } = req.body
  try {
    const category = await Category.findOne({
      where: {
        id: category_id
      }
    })

    const product = await Product.update({
      name: name,
      price: price,
      stock: stock,
      categoryId: category_id
    },{where:{
      id:id
    }})
    return res.json(product)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Something went wrong' })
  }
})
app.delete('/product/:uuid', async (req,res)=>{
  const id = req.params.uuid
  try {
    const product = await Product.destroy({
      where: {
        id: id
      }
    })
    return res.json(product)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Something went wrong' })
  }
})

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