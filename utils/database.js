const mysql = require('mysql2');

/*creat database connection*/
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'0000',
    database:'crown_53'}
    )

module.exports = pool.promise();   