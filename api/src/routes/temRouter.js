//TODOS LOS ENDPOINTS QUE TERMINAN EN "/temperaments" VAN AQUI, CUANTO MAS MODULARICE MEJOR (puedo separar routes por dogsRoutes.js, postRoutes,etc.)
const { Router } = require('express');
const {getTemHandler}=require('../handlers/temRouterHandler')

const temRouter = Router();

temRouter.get('/',getTemHandler); 


module.exports = temRouter;