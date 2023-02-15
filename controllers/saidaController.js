const saidaModel = require("../models/saidaModel");

class SaidaController {
    find(req, res) {
        const saidas = saidaModel.list();
        return saidas.then((saidas) => res.status(200).json(saidas))
            .catch((error) => res.status(400).json(error.message));
    }

    create(req, res) {
        const novasaida = req.body;
        const saida = saidaModel.create(novasaida);
        return saida.then((saidaCriado) => res.status(201).json(saidaCriado))
            .catch((error) => res.status(400).json(error.message));
    }

    update(req, res) {
        const { id } = req.params;
        const saidaUpdate = req.body;
        const saida = saidaModel.update(saidaUpdate, id);
        return saida.then((saidaUpdated) => res.status(200).json(saidaUpdated))
            .catch((error) => res.status(400).json(error.message));
    }

    delete(req, res) {
        const { id } = req.params;
        const saidaDeleted = req.body;
        const saida = saidaModel.delete(id);
        saida.then((saidaDeleted) => res.status(200).json(saidaDeleted))
            .catch((error) => res.status(400).json(error.message));
    }


}

module.exports = new SaidaController();