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

        // Definir un array con los temperamentos


// Unir todos los temperamentos en una sola cadena de texto
var textoTemperamentos = temRepetidos.join(', ');

// Dividir la cadena en palabras individuales
var palabras = textoTemperamentos.split(', ');

// Crear un objeto para almacenar la frecuencia de las palabras
var frecuenciaPalabras = {};

// Contar la frecuencia de cada palabra
for (var i = 0; i < palabras.length; i++) {
    var palabra = palabras[i].trim(); // Eliminar espacios en blanco
    if (frecuenciaPalabras[palabra]) {
        frecuenciaPalabras[palabra]++;
    } else {
        frecuenciaPalabras[palabra] = 1;
    }
}
const array=[]
// Imprimir la frecuencia de cada palabra
for (var palabra in frecuenciaPalabras) {
    array.push([palabra,": ",frecuenciaPalabras[palabra]]);
}

    res.status(200).json(array.filter(arr=>arr[2]>20))}


module.exports={
    getTemHandler}