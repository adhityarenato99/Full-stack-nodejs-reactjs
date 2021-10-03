const mysql = require('mysql2');

// Create mySQL Connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_reactjs'
});

dbConn.connect(function(error) {
    if(error) throw error;
    console.log('Database Connected Successfully!');
})

module.exports = dbConn;