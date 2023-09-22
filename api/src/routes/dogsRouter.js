//TODOS LOS ENDPOINTS DE "/dogs" VAN AQUI, CUANTO MAS MODULARICE MEJOR (puedo separar routes por dogsRoutes.js, postRoutes,etc.)
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const{getDogsHandler,getDogIdRazaHandler,getDogNameHandler}=require('../handlers/dogsRouterHandler')



const dogsRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


dogsRouter.get('/',getDogsHandler); 
//dogsRouter.post('/', getDogRazaHandler);
dogsRouter.get('/name',getDogNameHandler);   //cambie el orden para que /name se verifique primero, si pongo id primero entonces el endpoint /name me da error porque name no existe como id string UUID
dogsRouter.get('/:id',getDogIdRazaHandler); 





module.exports = dogsRouter;
