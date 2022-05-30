const express = require('express')
const app = express()
const port = 3000
const db = require('./queries.js')
var bodyParser = require('body-parser')
const cors = require("cors");
const { sequelize } = require('./models')

const allroute = require('./router')
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api', allroute );

app.listen(port, async () => {
  console.log(`Album Store app listening on port ${port}`)
  await sequelize.authenticate()
  console.log('Database Connected!');
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