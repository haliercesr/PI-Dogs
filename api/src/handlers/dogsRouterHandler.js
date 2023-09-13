const {getDogIdRaza,getDogName,getDogs,postDogs} = require('../controllers/dogsRouter');
const {arrayFilterRepeat}=require('../utils/arrayFilterRepeat')


const getDogsHandler = async (req, res) => {
    try {
        const { data } = await getDogs();
    /*    const raza1SinFiltrar = []
        data.forEach(element => {
            let raza = element.breed_group
            raza1SinFiltrar.push({ raza })
        });
        //quitar duplicados y valores null
        const raza1Filtrado = arrayFilterRepeat(raza1SinFiltrar)*/

        return res.status(200).send(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getDogIdRazaHandler = async (req, res) => {
    //DIFERENCIAR LA SOLICITUD DE BUSCAR EN BD O EN LA API: NOSOTROS SABEMOS QUE EN LA API EL 
    //"id" ES NUMERICO Y EN LA BD EN STRING( UUID EN LOS MODELS). ENTONCES SI POR PARAMS NOS LLEGA UN "ID" DE TIPO NUMERICO 
    //BUSCAREMOS EN LA API Y SINO EN LA BD
    const { idRaza } = req.params
    
    const source = isNaN(idRaza) ? "bdd" : "api"   //con esto le ahorramos un paso al controller verificando que tipo de dato es ID,con esto PODEMOS DIFERENCIAR BUSQUEDAS DE UNA FUENTE EXTERNA A OTRA solo con el tipo de dato que nos llega.EJEMPLO: si id = "550e8400e29b41d4a716446655440000"(UUID es tipo string) sera "bdd"y si id=2(numero) sera (api)
    try {

        const response = await getDogIdRaza(idRaza,source);

        if (response === null) return res.status(200).send("No se encontro la Raza")


        return res.status(200).json(response)

    } catch (error) { return res.status(500).json({ error: error.message })}
};

const getDogNameHandler = async (req, res) => {

 //   const nombre1 = (req.query.name).toLowerCase().split('')      //con estas funciones y las de abajo me permite traer el "nombre" con mayusculas o minusculas
 //   const nombreMayus=[...nombre1[0].toUpperCase(),...nombre1.slice(1,nombre1.length)].join('')
 
 const nombre1 = (req.query.name || '').toLowerCase(); // Asegúrate de que `name` esté definido y lo convierte en minúsculas
 const nombreFormateado = nombre1.charAt(0).toUpperCase() + nombre1.slice(1);

    console.log(nombreFormateado)

    try {
      
      const response= await getDogName(nombreFormateado)
      if(response && response.length===0) return res.status(200).send("No hay razas con ese nombre")
      
     
      return res.status(200).json(response)

    } catch (error) { error: error.message }

    
};

const postDogsHandler=async(req,res)=>{
    const{image,name,height,weight,life_span,selectedTemperaments}=req.body
    
    try{
     //image no la verifico por ahora
     if ( !image || !name || !height || !weight || !life_span || !selectedTemperaments || selectedTemperaments.length===0) return res.status(400).json({error:'Faltan datos'})
     
   await postDogs(image,name,height,weight,life_span,selectedTemperaments)
   
  return res.status(200).send("se creo con exito")
    }catch(error){ 
        // Captura y maneja la excepción
        console.error('Error:', error.message);

        // Envía el error como respuesta
        return res.status(500).json({ error: error.message });}
}

module.exports = {
    getDogsHandler,
    getDogIdRazaHandler,
    getDogNameHandler,
    postDogsHandler,
}