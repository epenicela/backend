const mysql = require("mysql");


const conexao = mysql.createConnection({
    host: "localhost",
    port: 7238,
    user: "root",
    password: "sGsTtMDCYOElyDTQIuR7",
    database: "railway"
});

module.exports = conexao;
