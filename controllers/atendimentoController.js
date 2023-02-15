const atendimentoModel = require("../models/atendimentoModel");

class AtendimentoController {
    find(req, res) {
        const atendimentos = atendimentoModel.list();
        return atendimentos.then((atendimentos) => res.status(200).json(atendimentos))
            .catch((error) => res.status(400).json(error.message));
    }

    create(req, res) {
        const novaatendimento = req.body;
        const atendimento = atendimentoModel.create(novaatendimento);
        return atendimento.then((atendimentoCriado) => res.status(201).json(atendimentoCriado))
            .catch((error) => res.status(400).json(error.message));
    }

    update(req, res) {
        const { id } = req.params;
        const atendimentoUpdate = req.body;
        const atendimento = atendimentoModel.update(atendimentoUpdate, id);
        return atendimento.then((atendimentoUpdated) => res.status(200).json(atendimentoUpdated))
            .catch((error) => res.status(400).json(error.message));
    }

    delete(req, res) {
        const { id } = req.params;
        const atendimentoDeleted = req.body;
        const atendimento = atendimentoModel.delete(id);
        atendimento.then((atendimentoDeleted) => res.status(200).json(atendimentoDeleted))
            .catch((error) => res.status(400).json(error.message));
    }


}

module.exports = new AtendimentoController();