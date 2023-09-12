const {getTem}=require('../controllers/temRouter');
const { Temperaments } = require('../db')
const {separarArray}= require('../utils/separarArray')
const {arrayFilterRepeat}=require('../utils/arrayFilterRepeat')
const {filtrarTemps}=require('../utils/filtrarTemps')

const getTemHandler=async(req,res)=>{ 

    const response=await getTem()

    const temRepetidos = response.map(char=>
        char.temperament)
    
        //separo el array por comillas y los duplicados
    const temSeparado=separarArray(temRepetidos,',')
    
    temSeparado.forEach(async (tem) => {
        const Tem = await Temperaments.create({   //creo la base de datos de temperamentos
          name: tem.toUpperCase(),
        });})

     const tempFiltrados=filtrarTemps(temRepetidos)  //veo los que mas se repiten y los uso en el Frontend
     
 
    res.status(200).json(tempFiltrados)}


module.exports={
    getTemHandler}