const {Router} =require("express")
const router=Router();
const {getPlatforms}= require("./controllers/getAllPlatforms")

router.get("/", async (req, res) => {
    let {name} = req.query
    try {
        const games = await getPlatforms()
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
module.exports=router