//DESDE AQUI SEPARO LAS RUTAS, SEGUN EL ENDPOINT QUE LLEGE
const { Router } = require('express');
const dogsRouter=require('./dogsRouter');
const temRouter=require('./temRouter');


const mainRouter = Router();

mainRouter.use("/dogs",dogsRouter);

mainRouter.use("/temperaments",temRouter);

module.exports = mainRouter;
