const getDogs=require('../controllers/getDogs');
const getDogRaza=require('../controllers/getDogRaza');
const getDogName=require('../controllers/getDogName');
const postDogs=require('../controllers/postDogs');


const getDogsHandler=(req,res)=>{
    res.status(200).send("hola")};

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