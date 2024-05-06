const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
require('dotenv').config()
const port = process.env.PORT;
app.use(express.json())
app.use(express.static('public'))


server.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})