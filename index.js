const express = require('express');
const app = express();
const port = 3000;

//permicao de acesso externo
var cors = require('cors');
app.use(cors());

//Rotas e conexao
const appCustom = require("./config/appCustom");
appCustom(app, express);

app.listen(3000, (error) => {
    if (error) {
        console.log('Error to run this server');
        return;
    }
    console.log('The server is on');
})
