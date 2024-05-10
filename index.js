const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const pool = require('./config/db');
const indexRouter = require('./routes');
const bodyParser = require('body-parser');
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Database connected');
        connection.release();
    }
});

// Routes
app.use('/', indexRouter);

// Start the server
server.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
