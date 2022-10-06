const Pool = require('pg').Pool
const pool = new Pool({
    user: "postres",
    password: 'root',
    host: "localhost",
    port: 5432,
    database: ""
})

module.exports = pool()