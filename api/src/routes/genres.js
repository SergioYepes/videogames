require("dotenv").config();
const {Router} =require("express")
const router=Router();
const {apiGenre}= require("./controllers/getAllGenre")
const { Genre } = require('../db.js')

router.get('/', async function(req, res){
    const allGenre = await apiGenre()
    if(allGenre){
        allGenre.map(e => Genre.findOrCreate({
            where: {
                name: e.name
            }
        }))
    }
    res.send(allGenre) 
})
module.exports = router