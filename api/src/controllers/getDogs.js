const axios =require('axios');

const URLdogs='https://api.thedogapi.com/v1/breeds';
const {api_key} = process.env;

const getDogs= async(req,res)=>{
    
    try{
        const {data} = await axios.get(`${URLdogs}?api_key=${api_key}`)
        if (!data) return res.status(404).send("No se pudo comunicar con el servidor")
        const raza1=[]
        data.forEach(element => {
            let raza= element.breed_group
            raza1.push({raza})
        });
        //quitar duplicados y valores null
        const raza1Filter = raza1.filter((value, index, self) => {
            if (value.raza !== null && value.raza) {
              return self.findIndex(item => item.raza === value.raza) === index;
            }})
        return res.status(200).json(raza1Filter)
    }catch(error){res.status(500).json({error:error.message})}
}

module.exports= getDogs;
