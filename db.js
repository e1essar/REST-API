const Pool = require('pg').Pool
const pool = new Pool({
    user: "postres",
    password: 'postgres',
    host: "localhost",
    port: 5432,
    database: "node_postgres"
})

module.exports = pool
