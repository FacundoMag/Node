const express = require('express');

const app = express();

const port = 3000;

const personasRouter = require('./api/personas')

app.get("/", function(req, res, next){
    res.send("Hello, World!");
})

app.get("/a", function(req, res, next){
    res.send("Hello, other World!");
})

app.use('/api/personas', personasRouter);

app.listen(port, () => {
    console.log(`Ejecutandose en puerto ${port}`);
})