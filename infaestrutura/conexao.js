const mysql = require("mysql");


const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "u868151405_teste",
    password: "Teste2023",
    database: "u868151405_pweb"
});

module.exports = conexao;