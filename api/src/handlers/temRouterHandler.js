const {getTem}=require('../controllers/getTem');

const getTemHandler=(req,res)=>{ 

    const response=getTem()
    res.status(200).json(response)}


module.exports={
    getTemHandler}