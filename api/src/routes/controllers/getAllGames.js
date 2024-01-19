const {getApiInfo}= require("./getAllApi")
const { getDbInfo } = require("./getDbInfo.js")
const getAllGames = async () =>{
    const apincha= await getApiInfo()
    let dataBase= await getDbInfo()
    let allGames= apincha.concat(dataBase)
    return allGames
}
module.exports={
    getAllGames
}