const express = require('express')
const app = express();
const mysql = require('mysql2')
const path = require('path')
const bodyParser = require('body-parser')
const pool = require('../config/db')
const indexRouter = express.Router()
app.use(bodyParser.urlencoded({ extended: true }))

indexRouter.get('/enroll', (request, response) => {
    response.sendFile(path.join(__dirname, '././public/registration.html'))
})

indexRouter.post('/signup', (request, response) => {
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

indexRouter.get('/success', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/success.html'))
})

indexRouter.get('/contact', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/contact.html'))
})

indexRouter.get('/company', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/company.html'))
})

module.exports = indexRouter;