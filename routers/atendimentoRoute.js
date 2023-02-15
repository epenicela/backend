//const Router = require("express").Router;
const { Router } = require("express");
const router = Router();
const atendimentoController = require("../controllers/atendimentoController");


//get, post, put, delete

router.get("/atendimentos", atendimentoController.find);

router.post("/atendimentos", atendimentoController.create);

router.put("/atendimento/:id", atendimentoController.update);

router.delete("/atendimento/:id", atendimentoController.delete);

module.exports = router;

//app.use(router);
//</Routers>