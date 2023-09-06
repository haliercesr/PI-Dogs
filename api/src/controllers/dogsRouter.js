const axios = require('axios');
const { Dog } = require('../db')

const URLdogs = 'https://api.thedogapi.com/v1/breeds';
const { api_key } = process.env;

//GET | /dogs

const getDogs = async () => {

    return await axios.get(`${URLdogs}?api_key=${api_key}`)

}

//GET | /dogs/:idRaza

const getDogIdRaza = async (id, source) => {

    const getDogId = source === "api" ? (await axios.get(`${URLdogs}/${id}?api_key=${api_key}`)).data : await Dog.findByPk(id);

    return getDogId
}

//GET | /dogs/name?="..."

const getDogName = async (nombre) => {

    const dogs = await Dog.findAll(
        {
            where: {
                name: `${nombre}`
            }
        });

    if (dogs.length !== 0) {
        return dogs
    } else {
        const { data } = await axios(`${URLdogs}`)
        const dogs1Filter = data.filter(dog => dog.name === nombre)
        return dogs1Filter
    }
}

//POST | /dogs

const postDogs = async (image, name, height, weight, yearsoflife) => {

    const [createdDog, created] = await Dog.findOrCreate({                                                                 //model query: busca segun las condiciones en where y si no las encuentra crea una entrada segun las condiciones. Luego devuelve la instancia creada o encontrada.Created tiene un valor booleano
        where: { name },
        defaults: {
            image,
            height,
            weight,
            yearsoflife,
        }
    })
    return created
}

module.exports = { getDogIdRaza, getDogName, getDogs, postDogs }