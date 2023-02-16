/*const mysql = require("mysql");


const conexao = mysql.createConnection({
    host: "containers-us-west-101.railway.app",
    port: '7238',
    user: "root",
    password: "sGsTtMDCYOElyDTQIuR7",
    database: "railway"
});

module.exports = conexao;*/


//const mysql = require('mysql2')
const mysql = require("mysql");

const pool = mysql.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, conn) => {
    if(err) console.log(err)
    console.log("Connected successfully")
})

module.exports = pool.promise()
