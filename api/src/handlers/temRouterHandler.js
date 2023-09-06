const {getTem}=require('../controllers/temRouter');
const { Temperaments } = require('../db')
const {separarArray}= require('../utils/separarArray')
const {arrayFilterRepeat}=require('../utils/arrayFilterRepeat')

const getTemHandler=async(req,res)=>{ 

    const response=await getTem()

    const temRepetidos = response.map(char=>
        char.temperament)
    
        //separo el array por comillas y los duplicados
    const temSeparado=separarArray(temRepetidos,',')
    
    temSeparado.forEach(async (tem) => {
        const Tem = await Temperaments.create({
          name: tem.toUpperCase(),
        });})

    res.status(200).send("Se cargaron todos los temperamentos")}


module.exports={
    getTemHandler}