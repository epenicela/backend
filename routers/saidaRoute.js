//const Router = require("express").Router;
const { Router } = require("express");
const router = Router();
const saidaController = require("../controllers/saidaController");


//get, post, put, delete

router.get("/saidas", saidaController.find);

router.post("/saidas", saidaController.create);

router.put("/saida/:id", saidaController.update);

router.delete("/saida/:id", saidaController.delete);

module.exports = router;

//app.use(router);
//</Routers>