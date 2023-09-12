const axios = require('axios');
const { Dog, Temperaments } = require('../db')
const { Op } = require("sequelize");  //se utiliza Op para definir operadores de consultas en SQL, con Op podemos realizar busquedas mas complejas.

//Search By 'Raza': "https://api.thedogapi.com/v1/breeds/search?q={raza_perro}"
const URLdogsSearch='https://api.thedogapi.com/v1/breeds/search'

const URLdogs = 'https://api.thedogapi.com/v1/breeds';
const { api_key } = process.env;

//GET | /dogs

const getDogs = async () => {

    return await axios.get(`${URLdogs}?api_key=${api_key}`)

}

//GET | /dogs/:id

const getDogIdRaza = async (idRaza, source) => {
    console.log(idRaza)
    const getDogIdRaza = source === "api" ? (await axios.get(`${URLdogs}/${idRaza}?api_key=${api_key}`)).data : await Dog.findAll({where:{id:idRaza}});
    
    return getDogIdRaza
}

//GET | /dogs/name?="..."

const getDogName = async (nombre) => {

    const dogs = await Dog.findAll(
        {
            where: {
                name: {
                    [Op.iLike]: `%${nombre}`, // Búsqueda insensible a mayúsculas y minúsculas que contiene el nombre
                }
            }
        });

    if (dogs.length !== 0) {
        return dogs
    } else {
        const { data } = await axios(`${URLdogs}?api_key=${api_key}`)
    
        const dogs1Filter = data.filter(dog => dog.name.includes(nombre))
        return dogs1Filter
    }
}

//POST | /dogs

const postDogs = async (image, name, height, weight, life_span,selectedTemperaments) => {
   

    console.log(image, name, height, weight, life_span, selectedTemperaments)
    const [createdDog, created] = await Dog.findOrCreate({                                                                 //model query: busca segun las condiciones en where y si no las encuentra crea una entrada segun las condiciones. Luego devuelve la instancia creada o encontrada.Created tiene un valor booleano
        where: { name },
        defaults: {
            image,
            height,
            weight,
            life_span,
        }
    })


    console.log(created)
    

    

    // Obtiene los IDs de los temperamentos existentes o crea nuevos si no existen
  
const temperamentIds = await Promise.all(selectedTemperaments.map(async (temperamento) => {  //a mi array de temperamentos realizo un mapeo para ver si existe ese temperamento y si no existe se crea uno nuevo
                                                                                      
    const [temperament, created] = await Temperaments.findOrCreate({                  //para cada temperamento se inicia una operacion asincronica uso async y await para esperar a que cada operacion termine 
      where: { name: temperamento.toUpperCase() },                                    //  toUpperCase() para evitar que se cree otro temperamento en minusculas, ademas la tabla de Temperamens esta en mayusculas            //busco en mi tabla si existe los temperamentos, si no existe creo uno nuevo
    });                                                                               //Si no usara PROMISE.ALL tendria un array de promesas sin resolver porque estoy usando async y await
    return temperament.id;                                                            //luego retorno el id
    
  }));

  // Asocia los temperamentos al perro
  await createdDog.setTemperaments(temperamentIds);                  //Ya tengo el perro creado en mi tabla de "Dog" y el Id de cada temperamento en la tabla "Temperamens", ahora
                                                                     //me falta relacionar una tabla con la otra, esto lo logro hacer con

    

   

}

module.exports = { getDogIdRaza, getDogName, getDogs, postDogs }