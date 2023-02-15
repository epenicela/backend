const entradaModel = require("./entradaModel")
const conexao = require("../infaestrutura/conexao");
class EntradaModel {

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
        //const sql = "select *from entrada";
        const sql = "select data_entrada, quantidade_entrada, vacina_entrada, contabilistico, contabilistico + quantidade_entrada as disponivel, nome_vac, validade,quantidade, nr_dose,STATUSVAC, entrada.id as id, vacina.id as vacina_id from entrada INNER JOIN vacina ON vacina.id=vacina_entrada";
        return this.executeQuery(sql);
    }

    create(novoentrada) {
        const sql = "INSERT INTO entrada SET ?";
        return this.executeQuery(sql, novoentrada);
    }

    update(entradaUpdate, id) {
        const sql = "UPDATE entrada SET ? WHERE id = ?";
        return this.executeQuery(sql, [entradaUpdate, id]);
    }

    delete(id) {
        const sql = "DELETE FROM entrada WHERE id = ?";
        return this.executeQuery(sql, id);
    }

}

module.exports = new EntradaModel();