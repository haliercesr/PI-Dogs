const axios =require('axios');
const {Dog} =require('../db')

const URLdogs='https://api.thedogapi.com/v1/breeds';
const {api_key} = process.env;

const getDogIdRaza= async(id,source)=>{

const getDogId=source==="api"?(await axios.get(`${URLdogs}/${id}?api_key=${api_key}`)).data: await Dog.findByPk(id);
 return getDogId
}

module.exports={getDogIdRaza}