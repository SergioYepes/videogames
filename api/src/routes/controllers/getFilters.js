const {Genre,Videogames}= require("../../db.js")
const {getAllGames}=require("./getAllGames")

const nombreAs= async()=>{
    try {
        let games= await getAllGames()
        games==="asc"?
        games.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1;
            }
            return 0
        }) :
        games.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
            }
            return 0;
        })
        return games
    } catch (error) {
       return error
    }
}
const nombreDes= async()=>{
    try {
        let games= await getAllGames()
        games==="desc"?
        games.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
            }
            return 0
        }) :
        games.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1;
            }
            return 0;
        })
        return games
    } catch (error) {
       return error
    }
}
const minRating= async()=>{
    let games= await getAllGames()
    games==="min"?
    games.sort(function (a, b) {
        if ((a.rating) > (b.rating)){
            return 1
        };
        return 0
    }) :
    games.sort(function (a, b) {
        if ((a.rating) < (b.rating)){
            return -1
        };
        return 0
    });
return games
}
const maxRating= async()=>{
    let games= await getAllGames()
    games==="max"?
    games.sort(function (a, b) {
        if ((a.rating) < (b.rating)){
            return 1
        };
        return 0
    }) :
    games.sort(function (a, b) {
        if ((a.rating) > (b.rating)){
            return -1
        };
        return 0
    });
return games
}
const filtrarPorGenero = (games, selectedGenre) => {
    if (selectedGenre === "genres") {
      return games;
    }
    return games.filter((game) => game.genres.includes(selectedGenre));
  };

  const filterGenres = async (selectedGenre) => {
    try {
      const games = await getAllGames();
      const filteredGames = filtrarPorGenero(games, selectedGenre);
      return filteredGames;
    } catch (error) {
        console.error("Error al filtrar por género:", error);
        throw error; 
    }
  };
module.exports={
    nombreAs,
    nombreDes,
    minRating,
    maxRating,
    filterGenres,
}