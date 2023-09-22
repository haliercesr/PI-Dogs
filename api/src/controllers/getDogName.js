const axios =require('axios');
const {Dog} =require('../db')

const URLdogs='https://api.thedogapi.com/v1/breeds';
const {api_key} = process.env;

const getDogName= async(nombre)=>{
    console.log(nombre)
const dogs = await Dog.findAll(
    {
        where: {
            name:`${nombre}`
        }
    });

if (dogs.length!==0){
    return dogs
} else{
    const {data}=await axios(`${URLdogs}`)
    const dogs1Filter=data.filter(dog=>dog.name===nombre)

    return dogs1Filter
}

 

}

module.exports={getDogName}