//TODOS LOS ENDPOINTS DE "/dogs" VAN AQUI, CUANTO MAS MODULARICE MEJOR (puedo separar routes por dogsRoutes.js, postRoutes,etc.)
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogs=require('../controllers/getDogs');
const getDogRaza=require('../controllers/getDogRaza');
const getDogName=require('../controllers/getDogName');
const postDogs=require('../controllers/postDogs');



const dogsRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//PRIMERO VERIFICO QUE LAS RUTAS ESTEN BIEN Y LUEGO CREO LOS CONTROLLERS
dogsRouter.get('/',(req,res)=>{res.status(200).send("hola")}); 
dogsRouter.post('/', (req,res)=>{return res.status(200).send("holaa")});
dogsRouter.get('/:idRaza',(req,res)=>{ res.status(200).send("holaa")}); 
dogsRouter.get('/name',(req,res)=>{ res.status(200).send("holaa")}); 




module.exports = dogsRouter;
