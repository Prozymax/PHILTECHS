const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const pool = require('./config/db');
// const indexRouter = require('./routes');
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

// app.use('/', indexRouter)
app.get('/enroll', (request, response) => {
    response.sendFile(__dirname + '/public/registration.html')
})

app.post('/signup', (request, response) => {
    const { userFullName, userEmail, userTel, twitter_username, insta_username } = request.body;
    console.log(request.body.fullname)
    if (request.body) {
        const insertQuery = 'INSERT INTO users (fullname, email, phone, twitter_username, instagram_username) VALUES (?, ?, ?, ?, ?)'
        pool.query(insertQuery, [userFullName, userEmail, userTel, twitter_username, insta_username], (err, results, fields) => {
            if (err) {
                console.log('Err inserting data', err)
            }
            console.log('Data Inserted succesfully', results);
            response.redirect('/success')
        })
    }
})

app.get('/success', (request, response) => {
    response.sendFile(__dirname + '/public/success.html')
})

app.get('/contact', (request, response) => {
    response.sendFile(__dirname + '/public/contact.html')
})

app.get('/company', (request, response) => {
    response.sendFile(__dirname + '/public/company.html')
})


server.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})