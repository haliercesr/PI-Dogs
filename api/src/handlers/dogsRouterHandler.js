const { getDogIdRaza, getDogName, getDogs, postDogs } = require('../controllers/dogsRouter');


//GET | /dogs

const getDogsHandler = async (req, res) => {
    try {
        response= await getDogs();
       response.map(dog=>console.log(dog.image))

        return res.status(200).json(response);
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ error: error.message });  //UNA MEJOR MANERA DE MANEJAR EL ERROR PUEDE SER DISCRIMINANDO A QUE INSTANCIA PERTENECE
    }
};


//GET | /dogs/:id

const getDogIdRazaHandler = async (req, res) => {
    //DIFERENCIAR LA SOLICITUD DE BUSCAR EN BD O EN LA API: NOSOTROS SABEMOS QUE EN LA API EL 
    //"id" ES NUMERICO Y EN LA BD EN STRING( UUID EN LOS MODELS). ENTONCES SI POR PARAMS NOS LLEGA UN "ID" DE TIPO NUMERICO 
    //BUSCAREMOS EN LA API Y SINO EN LA BD
    const { idRaza } = req.params

    const source = isNaN(idRaza) ? "bdd" : "api"   //con esto le ahorramos un paso al controller verificando que tipo de dato es ID,con esto PODEMOS DIFERENCIAR BUSQUEDAS DE UNA FUENTE EXTERNA A OTRA solo con el tipo de dato que nos llega.EJEMPLO: si id = "550e8400e29b41d4a716446655440000"(UUID es tipo string) sera "bdd"y si id=2(numero) sera (api)
    try {

        const response = await getDogIdRaza(idRaza, source);
        if (response === null) return res.status(200).send("No se encontro la Raza")

        return res.status(200).json(response)

    } catch (error) {
        console.log(error.message)
         return res.status(400).json({ error: error.message }) 
        }
};


//GET | /dogs/name?="..."

const getDogNameHandler = async (req, res) => {

    //   const nombre1 = (req.query.name).toLowerCase().split('')      //con estas funciones y las de abajo me permite traer el "nombre" con mayusculas o minusculas
    //   const nombreMayus=[...nombre1[0].toUpperCase(),...nombre1.slice(1,nombre1.length)].join('')
    const nombre1 = (req.query.name || '').toLowerCase(); // Asegúrate de que `name` esté definido y lo convierte en minúsculas
    const nombreFormateado = nombre1.charAt(0).toUpperCase() + nombre1.slice(1);

    try {

        const response = await getDogName(nombreFormateado)
        if (response && response.length === 0) return res.status(200).send("No hay razas con ese nombre")

        return res.status(200).json(response)

    } catch (error) {
        console.log(error.message)
         res.status(400).json({error: error.message })}
};

const postDogsHandler = async (req, res) => {
    const { image, name, height, weight, life_span, selectedTemperaments } = req.body  //destructurin de un objeto, tambien se puede hacer de un array

    try {
        //image no la verifico por ahora
        if (!image || !name || !height || !weight || !life_span || !selectedTemperaments || selectedTemperaments.length === 0) return res.status(400).json({ error: 'Faltan datos' })

        const response=await postDogs(image, name, height, weight, life_span, selectedTemperaments)

        return res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
        return res.status(400).json(error)
    }
}

module.exports = {
    getDogsHandler,
    getDogIdRazaHandler,
    getDogNameHandler,
    postDogsHandler,
}