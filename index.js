const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const pool = require('./config/db');
const indexRouter = require('./routes');
const bodyParser = require('body-parser');
require('dotenv').config()
const port = process.env.PORT;
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true}))


pool.getConnection((err, connection) => {
    if (err) {
        console.log('Error Connecting to Database', err)
    }
    else {
        console.log('Database Connected')
        connection.release()
    }
})

app.use('/', indexRouter)


server.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})