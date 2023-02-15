const vacinaModel = require("../models/vacinaModel")
const conexao = require("../infaestrutura/conexao");
class VacinaModel {

    executeQuery(sql, parametros = "") {
        return new Promise((resolve, reject) => {
            conexao.query(sql, parametros, (error, resposta) => {
                if (error) {
                    return reject(error);
                }
                return resolve(resposta);
            });
        });
    }

    list() {
        const sql = "select *from vacina";
        return this.executeQuery(sql);
    }

    create(novovacina) {
        const sql = "INSERT INTO vacina SET ?";
        return this.executeQuery(sql, novovacina);
    }

    update(vacinaUpdate, id) {
        const sql = "UPDATE vacina SET ? WHERE id = ?";
        return this.executeQuery(sql, [vacinaUpdate, id]);
    }

    delete(id) {
        const sql = "DELETE FROM vacina WHERE id = ?";
        return this.executeQuery(sql, id);
    }

}

module.exports = new VacinaModel();