const router = require("../routers");
const conexao = require("../infaestrutura/conexao");
const tabelas = require("../infaestrutura/tabelas");

module.exports = (app, express) => {
    router(app, express);
    tabelas.init(conexao);
}