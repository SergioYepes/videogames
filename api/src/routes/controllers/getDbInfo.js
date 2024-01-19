const { Videogame, Genre } = require('../../db.js')

const getDbInfo= async ()=>{
    return await Videogame.findAll({
        include:{
            model:Genre,
            attributes:["name"],
            through:{
                attributes: []
            }
        }
    })
}
module.exports={
    getDbInfo
}