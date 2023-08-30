//TODOS LOS ENDPOINTS DE "/dogs" VAN AQUI, CUANTO MAS MODULARICE MEJOR (puedo separar routes por dogsRoutes.js, postRoutes,etc.)
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const{getDogsHandler,getDogRazaHandler,getDogNameHandler,postDogsHandler}=require('../handlers/dogsRouterHandler')



const dogsRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


dogsRouter.get('/',getDogsHandler); 
dogsRouter.post('/', getDogRazaHandler);
dogsRouter.get('/:id',getDogNameHandler); 
dogsRouter.get('/name',postDogsHandler); 




module.exports = dogsRouter;
