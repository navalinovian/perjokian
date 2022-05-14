const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgre',
  host: 'localhost',
  database: 'albumstore',
  password: '1q2w3e4r',
  port: 5432,
})

const getCategory = (request, response) =>{
    pool.query('SELECT * FROM production.category ORDER by id ASC', (error, result)=>{
        if (error) {
            throw error
        }
        response.status(200).json(result.rows);
    })
}

module.exports = {
    getCategory,
  }