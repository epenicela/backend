const entradaModel = require("./atendimentoModel")
const conexao = require("../infaestrutura/conexao");
class AtendimentoModel {

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
        //const sql = "select *from atendimento";
        const sql = "SELECT nome, DATA, endereco, genero, STATUS, nome_vac, validade,quantidade, nr_dose,STATUSVAC, vacina_id, paciente_id, atendimento.id as id, DATA_1, DATA_2,intervalo, STATUS_CON FROM atendimento INNER JOIN vacina ON vacina.id=atendimento.vacina_id INNER JOIN paciente ON paciente.id=atendimento.paciente_id";
        return this.executeQuery(sql);
    }

    create(novoatendimento) {
        const sql = "INSERT INTO atendimento SET ?";
        return this.executeQuery(sql, novoatendimento);
    }

    update(atendimentoUpdate, id) {
        const sql = "UPDATE atendimento SET ? WHERE id = ?";
        return this.executeQuery(sql, [atendimentoUpdate, id]);
    }

    delete(id) {
        const sql = "DELETE FROM atendimento WHERE id = ?";
        return this.executeQuery(sql, id);
    }

}

module.exports = new AtendimentoModel();