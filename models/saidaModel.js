const entradaModel = require("./saidaModel")
const conexao = require("../infaestrutura/conexao");
class SaidaModel {

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
        //const sql = "select *from saida";
        const sql = "select data_saida, quantidade_saida, vacina_saida, contabilistico, contabilistico - quantidade_saida as disponivel, nome_vac, validade,quantidade, nr_dose,STATUSVAC, saida.id as id, vacina.id as vacina_id from saida INNER JOIN vacina ON vacina.id=vacina_saida";
        return this.executeQuery(sql);
    }

    create(novosaida) {
        const sql = "INSERT INTO saida SET ?";
        return this.executeQuery(sql, novosaida);
    }

    update(saidaUpdate, id) {
        const sql = "UPDATE saida SET ? WHERE id = ?";
        return this.executeQuery(sql, [saidaUpdate, id]);
    }

    delete(id) {
        const sql = "DELETE FROM saida WHERE id = ?";
        return this.executeQuery(sql, id);
    }

}

module.exports = new SaidaModel();