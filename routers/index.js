
//const { use } = require("./pacienteRoute");
const pacienteRoute = require("./pacienteRoute");

//const { use } = require("./vacinaRoute");
const vacinaRoute = require("./vacinaRoute");
const entradaRoute = require("./entradaRoute");
const saidaRoute = require("./saidaRoute");
const atendimentoRoute = require("./atendimentoRoute");

module.exports = (app, express) => {

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    //Rotas
    app.use(pacienteRoute);
    app.use(vacinaRoute);
    app.use(entradaRoute);
    app.use(saidaRoute);
    app.use(atendimentoRoute);
}