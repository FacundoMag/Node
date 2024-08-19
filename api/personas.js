const express = require('express');
const router = express.Router();

router.get("/", function(req, res, next){
    res.send("API PERSONAS");
})

router.get("/:id", function(req, res, next){
    res.send(`ruta de Persona id ${req.params.id}`);
})

module.exports = router;