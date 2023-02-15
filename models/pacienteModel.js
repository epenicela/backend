const pacienteModel = require("../models/pacienteModel")
const conexao = require("../infaestrutura/conexao");
class PacienteModel {

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
        const sql = "select *from paciente";
        return this.executeQuery(sql);
    }

    create(novoPaciente) {
        const sql = "INSERT INTO paciente SET ?";
        return this.executeQuery(sql, novoPaciente);
    }

    update(pacienteUpdate, id) {
        const sql = "UPDATE paciente SET ? WHERE id = ?";
        return this.executeQuery(sql, [pacienteUpdate, id]);
    }

    delete(id) {
        const sql = "DELETE FROM paciente WHERE id = ?";
        return this.executeQuery(sql, id);
    }

}

module.exports = new PacienteModel();