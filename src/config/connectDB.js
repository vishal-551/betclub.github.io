const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '178.16.136.170',
    user: 'u681737559_big',
    password: 'Man@99051',
    database: 'u681737559_big'
});


export default connection;