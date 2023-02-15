//const Router = require("express").Router;
const { Router } = require("express");
const router = Router();
const entradaController = require("../controllers/entradaController");


//get, post, put, delete

router.get("/entradas", entradaController.find);

router.post("/entradas", entradaController.create);

router.put("/entrada/:id", entradaController.update);

router.delete("/entrada/:id", entradaController.delete);

module.exports = router;

//app.use(router);
//</Routers>