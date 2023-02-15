//const Router = require("express").Router;
const { Router } = require("express");
const router = Router();
const vacinaController = require("../controllers/vacinaController");


//get, post, put, delete

router.get("/vacinas", vacinaController.find);

router.post("/vacinas", vacinaController.create);

router.put("/vacina/:id", vacinaController.update);

router.delete("/vacina/:id", vacinaController.delete);

module.exports = router;

//app.use(router);
//</Routers>