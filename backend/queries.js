const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgre',
  host: 'localhost',
  database: 'albumstore',
  password: '1q2w3e4r',
  port: 5432,
})
/* PRODUCTION SCHEMA */
    /* CATEGORY */
const getCategory = (request, response) =>{
    pool.query('SELECT * FROM production.category ORDER by id ASC', (error, result)=>{
        if (error) {
            throw error
        }
        response.status(200).json(result.rows);
    })
}
const getCategoryById = (request, response) =>{
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM production.category WHERE id=$1',[id], (error, result)=>{
        if (error) {
            throw error
        }
        response.status(200).json(result.rows);
    })
}

const createCategory = (request, response) => {
    const { name } = request.body
    const now = new Date()
    pool.query('INSERT INTO production.category (name, created_at, updated_at, deleted_at) VALUES ($1, $2, $3, $4) RETURNING id', [name, now, now, null], (error, result) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Category added with ID: ${result.rows[0].id}`)
    })
  }

const updateCategory = (request, response) => {
    const id = parseInt(request.params.id)
    const { name } = request.body
    const now = new Date()
    pool.query(
      'UPDATE production.category SET name = $1, updated_at = $2 WHERE id = $3',
      [name, now, id],
      (error, result) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Category with ID: ${id} has been modified`)
      }
    )
  }

const deleteCategory = (request, response) => {
    const id = parseInt(request.params.id)
    const now = new Date()
    pool.query('UPDATE  production.category SET deleted_at = $1 WHERE id = $2', [now,id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Category with ID: ${id} has been deleted`)
    })
  }
  
   /* PRODUCTS */

   const getProduct = (request, response) =>{
    pool.query('SELECT * FROM production.product ORDER by id ASC', (error, result)=>{
        if (error) {
            throw error
        }
        response.status(200).json(result.rows);
    })
}
const getProductById = (request, response) =>{
    const id = request.params.uuid
    pool.query('SELECT * FROM production.product WHERE id=$1',[id], (error, result)=>{
        if (error) {
            throw error
        }
        response.status(200).json(result.rows);
    })
}

const createProduct = (request, response) => {
    const { name, price, stock } = request.body
    const now = new Date()
    pool.query('INSERT INTO production.product (name, created_at, updated_at, price, stock) VALUES ($1, $2, $3, $4, $5) RETURNING id', [name, now, now, price, stock], (error, result) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Product added with ID: ${result.rows[0].id}`)
    })
  }

const updateProduct = (request, response) => {
    const id = request.params.uuid
    const { name, price, stock } = request.body
    const now = new Date()
    pool.query(
      'UPDATE production.product SET name = $1, price = $2, stock = $3 , updated_at = $4 WHERE id = $5',
      [name, price, stock, now, id],
      (error, result) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Product with ID: ${id} has been modified`)
      }
    )
  }

const deleteProduct = (request, response) => {
    const id = request.params.uuid
    const now = new Date()
    pool.query('UPDATE  production.product SET deleted_at = $1 WHERE id = $2', [now,id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Product with ID: ${id} has been deleted`)
    })
  }

module.exports = {
    getCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
    
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
  }