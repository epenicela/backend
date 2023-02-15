const pacienteModel = require("../models/pacienteModel");

class PacienteController {
    find(req, res) {
        const pacientes = pacienteModel.list();
        return pacientes.then((pacientes) => res.status(200).json(pacientes))
            .catch((error) => res.status(400).json(error.message));
    }

    create(req, res) {
        const novoPaciente = req.body;
        const paciente = pacienteModel.create(novoPaciente);
        return paciente.then((pacienteCriado) => res.status(201).json(pacienteCriado))
            .catch((error) => res.status(400).json(error.message));
    }

    update(req, res) {
        const { id } = req.params;
        const pacienteUpdate = req.body;
        const paciente = pacienteModel.update(pacienteUpdate, id);
        return paciente.then((pacienteUpdated) => res.status(200).json(pacienteUpdated))
            .catch((error) => res.status(400).json(error.message));
    }

    delete(req, res) {
        const { id } = req.params;
        const pacienteDeleted = req.body;
        const paciente = pacienteModel.delete(id);
        paciente.then((pacienteDeleted) => res.status(200).json(pacienteDeleted))
            .catch((error) => res.status(400).json(error.message));
    }


}

module.exports = new PacienteController();