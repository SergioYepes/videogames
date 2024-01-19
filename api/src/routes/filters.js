const { Router } = require('express');
const router=Router()
const {nombreAs,
    nombreDes,
    minRating,
    maxRating,
    filterGenres
    }= require("./controllers/getFilters.js")

router.get("/asc",async(req,res)=>{
    try {
        let az=await nombreAs()
        res.status(200).send(az)
    } catch (error) {
        console.log("error en la ruta /asc "+ error)
        res.status(500).json({ error: "Error interno del servidor." });
    }
})
router.get("/desc",async(req,res)=>{
    try {
        let za=await nombreDes()
        res.status(200).send(za)
    } catch (error) {
        console.log("error en la ruta /desc "+ error)
        res.status(500).json({ error: "Error interno del servidor." });
    }
})
router.get("/Max",async(req,res)=>{
    try {
        let Max=await maxRating()
        res.status(200).send(Max)
    } catch (error) {
        console.log("error en la ruta /Max "+ error)
        res.status(500).json({ error: "Error interno del servidor." });
    }
})
router.get("/Min",async(req,res)=>{
    try {
        let Min=await minRating()
        res.status(200).send(Min)
    } catch (error) {
        console.log("error en la ruta /Min "+ error)
        res.status(500).json({ error: "Error interno del servidor." });
    }
})
router.get("/Genres", async (req, res)=>{
    try {
        const selectedGenre =req.query.genre
        if (!selectedGenre) {
            return res.status(400).json({ error: "Se requiere un parámetro 'genre'." });
          }
        const filteredGames = await filterGenres(selectedGenre);
        res.status(200).send(filteredGames);  
    } catch (error) {
        console.log("error en la ruta /Genres " + error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
})
module.exports=router