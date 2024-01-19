const axios= require("axios")
const {API_KEY}=process.env;
const apiGenre = async function(){
    const info = await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    const parsedinfo = await info.data.results.map(e => {
        return {
            name: e.name
        }
    })
    return parsedinfo
}
module.exports = {apiGenre}