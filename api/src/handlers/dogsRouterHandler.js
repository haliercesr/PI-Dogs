const {getDogIdRaza,getDogName,getDogs,postDogs} = require('../controllers/dogsRouter');
const {arrayFilterRepeat}=require('../utils/arrayFilterRepeat')


const getDogsHandler = async (req, res) => {
    try {
        const { data } = await getDogs();
        const raza1SinFiltrar = []
        data.forEach(element => {
            let raza = element.breed_group
            raza1SinFiltrar.push({ raza })
        });
        //quitar duplicados y valores null
        const raza1Filtrado = arrayFilterRepeat(raza1SinFiltrar)

        return res.status(200).send(raza1Filtrado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getDogIdRazaHandler = async (req, res) => {
    //DIFERENCIAR LA SOLICITUD DE BUSCAR EN BD O EN LA API: NOSOTROS SABEMOS QUE EN LA API EL 
    //"id" ES NUMERICO Y EN LA BD EN STRING( UUID EN LOS MODELS). ENTONCES SI POR PARAMS NOS LLEGA UN "ID" DE TIPO NUMERICO 
    //BUSCAREMOS EN LA API Y SINO EN LA BD
    const { id } = req.params
    const source = isNaN(id) ? "bdd" : "api"   //con esto le ahorramos un paso al controller verificando que tipo de dato es ID,con esto PODEMOS DIFERENCIAR BUSQUEDAS DE UNA FUENTE EXTERNA A OTRA solo con el tipo de dato que nos llega.EJEMPLO: si id = "550e8400e29b41d4a716446655440000"(UUID es tipo string) sera "bdd"y si id=2(numero) sera (api)
    try {

        const response = await getDogIdRaza(id, source);

        if (response === null) return res.status(200).send("null")

        return res.status(200).json(response.breed_group)

    } catch (error) { error: error.message }
};

const getDogNameHandler = async (req, res) => {
    const nombre = req.query.name
    try {
      
      const response= await getDogName(nombre)
      if(response && response.length===0) return res.status(200).send("No hay razas con ese nombre")
      return res.status(200).json(response)

    } catch (error) { error: error.message }

    
};

const postDogsHandler=async(req,res)=>{
    const{image,name,height,weight,yearsoflife}=req.body
    
    try{
     
     if (!image || !name || !height || !weight || !yearsoflife) return res.status(400).json({error:'Faltan datos'})
  
   const response= await postDogs(image,name,height,weight,yearsoflife)

  return res.status(200).send(response)
    }catch(error){error:error.message}
}

module.exports = {
    getDogsHandler,
    getDogIdRazaHandler,
    getDogNameHandler,
    postDogsHandler,
}