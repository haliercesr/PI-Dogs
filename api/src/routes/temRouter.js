//TODOS LOS ENDPOINTS QUE TERMINAN EN "/temperaments" VAN AQUI, CUANTO MAS MODULARICE MEJOR (puedo separar routes por dogsRoutes.js, postRoutes,etc.)
const { Router } = require('express');
const getTemperaments=require('../controllers/getTemperaments');


const temRouter = Router();

temRouter.get('/',(req,res)=>{ res.status(200).send("holaa")}); 


module.exports = temRouter;