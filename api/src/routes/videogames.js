require("dotenv").config();
const {Router} =require("express")
const router=Router();
const {getAllGames}= require("./controllers/getAllGames")
const { Videogame, Genre } = require('../db.js')

//Metodo get con nombre
router.get("/", async (req, res) => {
    let {name} = req.query
    try {
        const games = await getAllGames()
        if(name){
            let filterByName = games.filter(e=>e.name.toLowerCase().includes(name.toLowerCase()))
            if(filterByName.length>0){
                return res.status(200).json(filterByName)
            }
            else(
                res.status(404).send("Videogame name is wrong")
            )
        }
        res.status(200).send(games)
    } catch (error) {
        res.status(404).json({error: "error", message: error.message})
    }
})

//metodo get con id
router.get("/:id",async(req,res)=>{
    const {id}=req.params
    const getOneGame= await getAllGames()
    if (id){
        let one= await getOneGame.filter(e=> e.id==id)
        one.length ? res.status(200).send(one) : res.status(404).send({name:`Sorry but we don´t have that ${id} in out games 😰`})  
    }
})

//metodo post
router.post("/",async (req,res)=>{
    let {name,description,released,rating,platforms,background_image,createdInDb,genres}=req.body
    if(!background_image){
        background_image= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcolombia.unir.net%2Fdiseno%2Fmaestria-desarrollo-videojuegos%2F&psig=AOvVaw1cGAJie4lyuVxJF5gqQmiL&ust=1704499482417000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDbhsX5xIMDFQAAAAAdAAAAABAD"
    }
    if(name && description && genres && platforms){
        let newGame= await Videogame.create({
            name,
            description,
            released,
            rating,
            background_image,
            createdInDb,
            platforms
        })
        let genreDb= await Genre.findAll({
            where:{
                name: genres
            }
        })
        newGame.addGenre(genreDb)
        res.status(200).send("Se creo señores")
    }
    else{
        res.status(404).send("Please, Check and complete all the fields")
    }
})

//metodo put
router.put("/:id", async(req, res)=>{
    try {
        const {id}=req.params
        const{name,description,released,rating,platforms,background_image}=req.body
        await Videogame.update(
            {name,description,released,rating,platforms,background_image},
            {
                where: {
                    id
                }
            }
        )
        res.status(200).send("cambios realizados")
    } catch (error) {
        res.status(400).send("No se actualizo")
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        let{id}=req.params
        res.json(await Videogame.destroy({
            where:{
                id
            }
        }))
        res.status(200).send("deleteao")
    }
    catch (error) {
        res.status(400).send("No se pudo destruir esta cosa")    
    }
})
module.exports = router;