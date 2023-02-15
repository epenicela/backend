const vacinaModel = require("../models/vacinaModel");

class VacinaController {
    find(req, res) {
        const vacinas = vacinaModel.list();
        return vacinas.then((vacinas) => res.status(200).json(vacinas))
            .catch((error) => res.status(400).json(error.message));
    }

    create(req, res) {
        const novavacina = req.body;
        const vacina = vacinaModel.create(novavacina);
        return vacina.then((vacinaCriado) => res.status(201).json(vacinaCriado))
            .catch((error) => res.status(400).json(error.message));
    }

    update(req, res) {
        const { id } = req.params;
        const vacinaUpdate = req.body;
        const vacina = vacinaModel.update(vacinaUpdate, id);
        return vacina.then((vacinaUpdated) => res.status(200).json(vacinaUpdated))
            .catch((error) => res.status(400).json(error.message));
    }

    delete(req, res) {
        const { id } = req.params;
        const vacinaDeleted = req.body;
        const vacina = vacinaModel.delete(id);
        vacina.then((vacinaDeleted) => res.status(200).json(vacinaDeleted))
            .catch((error) => res.status(400).json(error.message));
    }


}

module.exports = new VacinaController();