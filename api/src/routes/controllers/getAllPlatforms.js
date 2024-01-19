const axios= require("axios")
const {API_KEY}=process.env;
const getPlatforms= async ()=>{
    let promises = []
    let allPlatforms = []
    try{
        for(let i=1; i<=2; i++){
            promises.push(axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}&page=${i}`)
            .then((response)=>{
                return response
            }))
        }
        
        

    await Promise.all(promises)
        .then((response) => {
            for(let i = 0; i< promises.length; i++){
                allPlatforms = allPlatforms.concat(response[i].data.results.map(e => {
                    return{
                        id: e.id,
                        name: e.name,
                    }
                }))
            }
        })
        return allPlatforms
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {getPlatforms}