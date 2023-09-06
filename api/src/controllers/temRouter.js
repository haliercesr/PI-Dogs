const axios = require('axios');
const URLdogs = 'https://api.thedogapi.com/v1/breeds';
const { api_key } = process.env;

//GET | /temperaments

const getTem=async()=>{ 

  return (await axios.get(`${URLdogs}?api_key=${api_key}`)).data

}

module.exports = {getTem};
