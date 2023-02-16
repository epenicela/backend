const mysql = require("mysql");


const conexao = mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME
});

module.exports = conexao;
//port: '7238'
