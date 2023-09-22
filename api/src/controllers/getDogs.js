const axios =require('axios');

const URLdogs='https://api.thedogapi.com/v1/breeds';
const {api_key} = process.env;

const getDogs= async()=>{
    
    return await axios.get(`${URLdogs}?api_key=${api_key}`)  
        
}

module.exports= {getDogs};
