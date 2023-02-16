const mysql = require("mysql");


const conexao = mysql.createConnection({
    host: "82.180.153.77",
    port: 3306,
    user: "u868151405_vacin",
    password: "@Academy3",
    database: "u868151405_pweb"
});

module.exports = conexao;
