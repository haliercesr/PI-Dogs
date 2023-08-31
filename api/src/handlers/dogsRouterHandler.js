const getDogs = require('../controllers/getDogs');
const getDogRaza=require('../controllers/getDogRaza');
const getDogName=require('../controllers/getDogName');
const postDogs=require('../controllers/postDogs');



const getDogsHandler = async (req, res) => {
    try {
        const {response} = await getDogs();
        console.log(response);
        return res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
};

const getDogRazaHandler=(req,res)=>{
    res.status(200).send("hola")};

const getDogNameHandler=(req,res)=>{
    const {id}=req.params
    //"id" hay que convertirlo a
    res.status(200).send(`hola ${id}`)};

const postDogsHandler=(req,res)=>{
    res.status(200).send("hola")};

module.exports={
    getDogsHandler,
    getDogRazaHandler,
    getDogNameHandler,
    postDogsHandler,
}