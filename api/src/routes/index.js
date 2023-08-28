const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogs=require('../controllers/getDogs');
const getDogRaza=require('../controllers/getDogRaza');
const getDogName=require('../controllers/getDogName');
const postDogs=require('../controllers/postDogs');
const getTemperaments=require('../controllers/getTemperaments');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//PRIMERO VERIFICO QUE LAS RUTAS ESTEN BIEN Y LUEGO CREO LOS CONTROLLERS
router.get('/dogs',getDogs); 
//router.get('/dogs/:idRaza',getDogRaza); 
//router.get('/dogs/name',getDogName); 
//router.post('/dogs', postDogs);
//router.get('/temperaments',getTemperaments); 



module.exports = router;
