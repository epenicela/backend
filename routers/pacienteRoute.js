//const Router = require("express").Router;
const { Router } = require("express");
const router = Router();
const pacienteController = require("../controllers/pacienteController");


//get, post, put, delete

router.get("/pacientes",pacienteController.find);

router.post("/pacientes", pacienteController.create);

router.put("/paciente/:id", pacienteController.update);

router.delete("/paciente/:id", pacienteController.delete);

module.exports = router; 

//app.use(router);
//</Routers>