const mysql = require("mysql");


const conexao = mysql.createConnection({
    host: "containers-us-west-101.railway.app",
    port: 7238,
    user: "root",
    password: "sGsTtMDCYOElyDTQIuR7",
    database: "railway"
});

module.exports = conexao;
