const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'boedkqyqmgalajcchlew-mysql.services.clever-cloud.com',
    user: 'usk4gvmepermkvgr',
    password: 'KYoqXMmEs4F9ggT7SSXB',
    database: 'boedkqyqmgalajcchlew',
    // host: 'localhost',
    // user: 'root',
    // password: '1000',
    // port: 3309,
    // database: 'users',
    waitForConnections: true,
    connectionLimit: 50,
    queueLimit: 0
  });
  
  pool.getConnection((err, connection) => {
    if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Database connection was closed.');
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
        console.error('Database has too many connections.');
      }
      if (err.code === 'ECONNREFUSED') {
        console.error('Database connection was refused.');
      }
      // Handle other errors
    }
    if (connection) {
      connection.release(); // Release the connection
    }
    return;
  });
  

  module.exports = pool;