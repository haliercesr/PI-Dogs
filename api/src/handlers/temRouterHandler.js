const getTem=require('../controllers/getTem');

const getTemHandler=(req,res)=>{ 
    res.status(200).send("holaa")}

module.exports={
    getTemHandler,
}