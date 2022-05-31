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
const getAllCategory = (request, response) =>{
      pool.query('SELECT * FROM production.category ORDER by id DESC', (error, result)=>{
          if (error) {
              throw error
          }
          response.status(200).json(result.rows);
      })
  }
const getCategory = (request, response) =>{
    pool.query('SELECT * FROM production.category WHERE deleted_at IS NULL ORDER by id ASC', (error, result)=>{
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

  const hardDeleteCategory = (request, response) => {
    const id = parseInt(request.params.id)
    const now = new Date()
    pool.query('DELETE FROM production.category WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Category with ID: ${id} has been deleted`)
    })
  }
  
   /* PRODUCTS */

const getProduct = (request, response) =>{
    pool.query('SELECT * FROM production.product WHERE deleted_at IS NULL ORDER by id ASC', (error, result)=>{
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
    const { name, price, stock, category_id } = request.body
    const now = new Date()
    pool.query('INSERT INTO production.product (name, created_at, updated_at, price, stock, category_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id', [name, now, now, price, stock, category_id], (error, result) => {
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

  /* USER */

const getUser = (request, response) =>{
    pool.query('SELECT * FROM "user"."user" ORDER by created_at DESC', (error, result)=>{
        if (error) {
            throw error
        }
        response.status(200).json(result.rows);
    })
}
const getUserById = (request, response) =>{
    const id = request.params.uuid
    pool.query('SELECT * FROM "user"."user" WHERE id=$1',[id], (error, result)=>{
        if (error) {
            throw error
        }
        response.status(200).json(result.rows);
    })
}

const createUser = (request, response) => {
    const { username, password, role_id } = request.body
    const now = new Date()
    pool.query('INSERT INTO "user"."user" (username, created_at, updated_at, password, role_id) VALUES ($1, $2, $3, $4, $5) RETURNING id', [username, now, now, password, role_id], (error, result) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.rows[0].id}`)
    })
  }

const updateUser = (request, response) => {
    const id = request.params.uuid
    const { password, role_id } = request.body
    const now = new Date()
    pool.query(
      'UPDATE "user"."user" SET password = $1, role_id = $2, updated_at = $3  WHERE id = $4',
      [password, role_id, now, id],
      (error, result) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User with ID: ${id} has been modified`)
      }
    )
  }

const deleteUser = (request, response) => {
    const id = request.params.uuid
    const now = new Date()
    pool.query('UPDATE  "user"."user" SET deleted_at = $1 WHERE id = $2', [now,id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User with ID: ${id} has been deleted`)
    })
  }

  /* ROLE */

  const getRole = (request, response) =>{
    pool.query('SELECT * FROM "user"."role" ORDER by created_at DESC', (error, result)=>{
        if (error) {
            throw error
        }
        response.status(200).json(result.rows);
    })
}
const getRoleById = (request, response) =>{
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM "user"."role" WHERE id=$1',[id], (error, result)=>{
        if (error) {
            throw error
        }
        response.status(200).json(result.rows);
    })
}

const createRole = (request, response) => {
    const { id, name } = request.body
    const now = new Date()
    pool.query('INSERT INTO "user"."role" (id, name, created_at, updated_at) VALUES ($1, $2, $3, $4) RETURNING id', [id, name, now, now], (error, result) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Role added with ID: ${result.rows[0].id}`)
    })
  }

const updateRoleById = (request, response) => {
    const id = parseInt(request.params.id)
    const { name } = request.body
    const now = new Date()
    console.log(name);
    pool.query(
      'UPDATE "user"."role" SET name = $1, updated_at = $2  WHERE id = $3',
      [name, now, id],
      (error, result) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Role with ID: ${id} has been modified`)
      }
    )
  }

const deleteRole = (request, response) => {
    const id = request.params.id
    const now = new Date()
    pool.query('UPDATE  "user"."role" SET deleted_at = $1 WHERE id = $2', [now,id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Role with ID: ${id} has been deleted`)
    })
  }

module.exports = {
    getCategory,
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
    hardDeleteCategory,
    
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,

    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,

    getRole,
    getRoleById,
    createRole,
    updateRoleById,
    deleteRole
  }