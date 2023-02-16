const mysql = require("mysql");

/*var DB_HOST = process.env.DB_HOST || 'localhost';
var DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
var DB_NAME = process.env.DB_NAME || 'u868151405_pweb';
var DB_PORT = process.env.DB_PORT || 3606;

const conexao = mysql.createConnection({
    host: DB_HOST,
    port: 7238,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});*/



const conexao = mysql.createConnection({
    mysql -hcontainers-us-west-101.railway.app -uroot -psGsTtMDCYOElyDTQIuR7 --port 7238 --protocol=TCP railway
});

module.exports = conexao; 
