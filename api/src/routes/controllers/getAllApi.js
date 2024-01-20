const axios= require("axios")
const {API_KEY}=process.env;
const getApiInfo= async ()=>{
    let promises = []
    let allGames = []
    try{
        for(let i=1; i<=20; i++){
            promises.push(axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
            .then((response)=>{
                return response
            }))
        }
        
        

    await Promise.all(promises)
        .then((response) => {
            for(let i = 0; i< promises.length; i++){
                allGames = allGames.concat(response[i].data.results.map(e => {
                    return{
                        id: e.id,
                        name: e.name,
                        background_image: e.background_image,
                        genres: e.genres.map((g)=>
                          g.name
                        ),
                        platforms: e.platforms.map(e => {
                            return e.platform.name
                        }).join(' - '),
                        rating: e.rating,
                        released: e.released

                    }
                }))
            }
        })
        return allGames
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {getApiInfo}