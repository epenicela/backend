const entradaModel = require("../models/entradaModel");

class EntradaController {
    find(req, res) {
        const entradas = entradaModel.list();
        return entradas.then((entradas) => res.status(200).json(entradas))
            .catch((error) => res.status(400).json(error.message));
    }

    create(req, res) {
        const novaentrada = req.body;
        const entrada = entradaModel.create(novaentrada);
        return entrada.then((entradaCriado) => res.status(201).json(entradaCriado))
            .catch((error) => res.status(400).json(error.message));
    }

    update(req, res) {
        const { id } = req.params;
        const entradaUpdate = req.body;
        const entrada = entradaModel.update(entradaUpdate, id);
        return entrada.then((entradaUpdated) => res.status(200).json(entradaUpdated))
            .catch((error) => res.status(400).json(error.message));
    }

    delete(req, res) {
        const { id } = req.params;
        const entradaDeleted = req.body;
        const entrada = entradaModel.delete(id);
        entrada.then((entradaDeleted) => res.status(200).json(entradaDeleted))
            .catch((error) => res.status(400).json(error.message));
    }


}

module.exports = new EntradaController();