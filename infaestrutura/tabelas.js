class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelaVacina();
        this.criarTabelaEntrada();
        this.criarTabelaSaida();
        this.criarTabelaPaciente();
        this.criarTabelaAtendimento();

        this.criarTabelaEntradaTriggerInserted();
        this.criarTabelaEntradaTriggerDeleted();
        this.criarTabelaSaidaTriggerInserted();
        this.criarTabelaSaidaTriggerDeleted();
        this.criarTabelaAtendimentoTriggerInserted();
        this.criarTabelaAtendimentoTriggerDeleted();
    }

    criarTabelaVacina() {
        const sql =
            'CREATE TABLE IF NOT EXISTS vacina (' +
            'id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,' +
            'nome_vac VARCHAR(50) NOT NULL,' +
            'validade DATE NOT NULL,' +
            'nr_dose INT NOT NULL,' +
            'quantidade INT NOT NULL,' +
            'STATUSVAC ENUM("ativo","inativo") NULL DEFAULT "ativo")' +
            ' COLLATE="latin1_swedish_ci" ENGINE=InnoDB AUTO_INCREMENT=1;';

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro ao criar a tabela VACINA");
                console.log(error.message);
                return;
            }

            console.log("");
            console.log("CRIANDO TABELAS...");
            console.log("Tabela VACINA criada com sucesso...");
        });
    }

    criarTabelaEntrada() {
        const sql =
            'CREATE TABLE IF NOT EXISTS entrada (' +
            'id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,' +
            'data_entrada DATE NOT NULL,' +
            'quantidade_entrada INT NOT NULL,' +
            'vacina_entrada INT NOT NULL,' +
            'INDEX FK_entrada_vacina (vacina_entrada) USING BTREE,' +
            'CONSTRAINT FK_entrada_vacina FOREIGN KEY (vacina_entrada) REFERENCES u868151405_pweb.vacina (id) ON UPDATE CASCADE ON DELETE RESTRICT)' +
            ' COLLATE="latin1_swedish_ci" ENGINE=InnoDB AUTO_INCREMENT=1;';

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro ao criar a tabela ENTRADA");
                console.log(error.message);
                return;
            }
            console.log("Tabela ENTRADA criada com sucesso...");
        });
    }

    criarTabelaSaida() {
        const sql =
            'CREATE TABLE IF NOT EXISTS saida (' +
            'id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,' +
            'data_saida DATE NOT NULL,' +
            'quantidade_saida INT NOT NULL,' +
            'vacina_saida INT NOT NULL,' +
            'INDEX FK_saida_vacina (vacina_saida) USING BTREE,' +
            'CONSTRAINT FK_saida_vacina FOREIGN KEY (vacina_saida) REFERENCES u868151405_pweb.vacina (id) ON UPDATE CASCADE ON DELETE RESTRICT)' +
            ' COLLATE="latin1_swedish_ci" ENGINE=InnoDB AUTO_INCREMENT=1;';

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro ao criar a tabela SAIDA");
                console.log(error.message);
                return;
            }
            console.log("Tabela SAIDA criada com sucesso...");
        });
    }

    criarTabelaPaciente() {
        const sql =
            'CREATE TABLE IF NOT EXISTS paciente (' +
            'id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,' +
            'nome VARCHAR(50) NOT NULL,' +
            'DATA DATE NOT NULL,' +
            'endereco VARCHAR(50) NOT NULL,' +
            'genero ENUM("Masculino","Femenino") NULL DEFAULT "Masculino",' +
            'STATUS ENUM("ativo","inativo") NULL DEFAULT "ativo")' +
            ' COLLATE="latin1_swedish_ci" ENGINE=InnoDB AUTO_INCREMENT=1;';

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro ao criar a tabela PACIENTE");
                console.log(error.message);
                return;
            }
            console.log("Tabela PACIENTE criada com sucesso...");
        });
    }

    criarTabelaAtendimento() {
        const sql =
            'CREATE TABLE IF NOT EXISTS atendimento (' +
            'id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,' +
            'vacina_id INT NOT NULL,' +
            'paciente_id INT NOT NULL,' +
            'x_line INT NOT NULL  COMMENT "contabil",' +
            'DATA_1 DATE NOT NULL,' +
            'DATA_2 DATE NULL,' +
            'att INT NULL,'+
            //'DATA_3 DATE NULL,' +
            'STATUS_CON ENUM("ativo","inativo") NULL DEFAULT "ativo",' +
            'INDEX FK_paciente_id (paciente_id) USING BTREE,' +
            'CONSTRAINT FK_paciente_id FOREIGN KEY (paciente_id) REFERENCES u868151405_pweb.paciente (id) ON UPDATE CASCADE ON DELETE RESTRICT,' +
            'INDEX FK_vacina_id (vacina_id) USING BTREE,' +
            'CONSTRAINT FK_vacina_id FOREIGN KEY (vacina_id) REFERENCES u868151405_pweb.vacina (id) ON UPDATE CASCADE ON DELETE RESTRICT)' +
            ' COLLATE="latin1_swedish_ci" ENGINE=InnoDB AUTO_INCREMENT=1;';

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro ao criar a tabela ATENDIMENTO");
                console.log(error.message);
                return;
            }
            console.log("Tabela ATENDIMENTO criada com sucesso...");
        });
    }


    //TRIGGERS

    //<Entrada>
    criarTabelaEntradaTriggerInserted() {
        const sql =
            'CREATE TRIGGER entrada_after_insert AFTER INSERT ON entrada FOR EACH ROW update vacina set ' +
            'quantidade=quantidade+new.quantidade_entrada where id=new.vacina_entrada;';

        this.conexao.query(sql, (error) => {
            if (error) {
                if (error.errno == 1235) {
                    //console.log(error);

                    console.log("");
                    console.log("CRIANDO TRIGGERS...");
                    console.log("Trigger 'ENTRADA INSERT' criado com sucesso...");
                    return;
                }
                console.log(error.message);
                console.log("Erro ao criar a trigger 'ENTRADA INSERT'");
                return;
            }

            console.log("");
            console.log("CRIANDO TRIGGERS...");
            console.log("Trigger 'ENTRADA INSERT' criado com sucesso...");
            return;
        });
    }

    criarTabelaEntradaTriggerDeleted() {
        const sql =
            'CREATE TRIGGER entrada_after_delete AFTER DELETE ON entrada FOR EACH ROW update vacina set ' +
            'quantidade=quantidade-old.quantidade_entrada where id=old.vacina_entrada;';

        this.conexao.query(sql, (error) => {
            if (error) {
                if (error.errno == 1235) {
                    //console.log(error);
                    console.log("Trigger 'ENTRADA DELETE' criado com sucesso...");
                    return;
                }
                console.log(error.message);
                console.log("Erro ao criar a trigger 'ENTRADA DELETE'");
                return;
            }
            console.log("Trigger 'ENTRADA DELETE' criado com sucesso...");
            return;
        });
    }

    //<Saida>
    criarTabelaSaidaTriggerInserted() {
        const sql =
            'CREATE TRIGGER saida_after_insert AFTER INSERT ON saida FOR EACH ROW update vacina set quantidade=(quantidade)-new.quantidade_saida where id=new.vacina_saida;';

        this.conexao.query(sql, (error) => {
            if (error) {
                if (error.errno == 1235) {
                    //console.log(error);
                    console.log("Trigger 'SAIDA INSERT' criado com sucesso...");
                    return;
                }
                console.log(error.message);
                console.log("Erro ao criar a trigger 'SAIDA INSERT'");
                return;
            }
            console.log("Trigger 'SAIDA INSERT' criado com sucesso...");
            return;
        });
    }

    criarTabelaSaidaTriggerDeleted() {
        const sql =
            'CREATE TRIGGER saida_after_delete AFTER DELETE ON saida FOR EACH ROW update vacina set quantidade=(quantidade)+old.quantidade_saida where id=old.vacina_saida;';

        this.conexao.query(sql, (error) => {
            if (error) {
                if (error.errno == 1235) {
                    //console.log(error);
                    console.log("Trigger 'SAIDA DELETE' criado com sucesso...");
                    return;
                }
                console.log(error.message);
                console.log("Erro ao criar a trigger 'SAIDA DELETE'");
                return;
            }
            console.log("Trigger 'SAIDA DELETE' criado com sucesso...");
            return;
        });
    }


    criarTabelaAtendimentoTriggerInserted() {
        const sql =
            'CREATE TRIGGER atendimento_after_insert AFTER INSERT ON atendimento FOR EACH ROW INSERT INTO saida (data_saida, quantidade_saida, vacina_saida, contabilistico, att) VALUES (new.DATA_1, 1, new.vacina_id, new.x_line, new.id);';

        this.conexao.query(sql, (error) => {
            if (error) {
                if (error.errno == 1235) {
                    //console.log(error);
                    console.log("Trigger 'ATENDIMENTO INSERT' criado com sucesso...");
                    return;
                }
                console.log(error.message);
                console.log("Erro ao criar a trigger 'ATENDIMENTO INSERT'");
                return;
            }
            console.log("Trigger 'ATENDIMENTO INSERT' criado com sucesso...");
            return;
        });
    }

    criarTabelaAtendimentoTriggerDeleted() {
        const sql =
            'CREATE TRIGGER atendimento_after_delete AFTER DELETE ON atendimento FOR EACH ROW delete from saida where att= old.id;';

        this.conexao.query(sql, (error) => {
            if (error) {
                if (error.errno == 1235) {
                    //console.log(error);
                    console.log("Trigger 'ATENDIMENTO DELETE' criado com sucesso...");
                    return;
                }
                console.log(error.message);
                console.log("Erro ao criar a trigger 'ATENDIMENTO DELETE'");
                return;
            }
            console.log("Trigger 'ATENDIMENTO DELETE' criado com sucesso...");
            return;
        });
    }
    

}


module.exports = new Tabelas();