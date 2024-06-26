const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pool = require('../config/db');

const indexRouter = express.Router();

// Middleware to parse URL-encoded bodies
indexRouter.use(bodyParser.urlencoded({ extended: true }));

// Route to serve the registration HTML page
indexRouter.get('/enroll', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/registration.html'));
});

// Route to handle user registration
indexRouter.post('/signUp', (request, response) => {
    const { userFullName, userEmail, userTel, insta_username } = request.body;
    if (userFullName && userEmail && userTel) {
        const insertQuery = 'INSERT INTO users (fullname, email, phone, instagram_username) VALUES (?, ?, ?, ?)';
        pool.query(insertQuery, [userFullName, userEmail, userTel, insta_username], (err, results) => {
            if (err) {
                console.error('Error inserting data:', err);
                return response.status(500).send('Please reload the page and try again');
            }
            console.log('Data inserted successfully:', results);
            response.redirect('/success');
        });
    } else {
        response.status(400).send('Missing required fields');
    }
});

// Route to serve the success HTML page
indexRouter.get('/success', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/success.html'));
});

// Route to serve the contact HTML page
indexRouter.get('/contact', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/contact.html'));
});

// Route to serve the company HTML page
indexRouter.get('/company', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/company.html'));
});

module.exports = indexRouter;
