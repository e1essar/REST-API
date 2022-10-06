const express = require('express')

const PORT = process.env.PORT || 8080

const app = express()

app.get('/', (req, res) => {
    res.send('HELLO POSTGRES + NODEJS1')
})

app.listen(PORT, () => console.log('server started on ' + PORT))