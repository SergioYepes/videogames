import axios from "axios";

export const actions ={
    GET_ALL_GAMES: "GET_ALL_GAMES",
    GET_GENRES: "GET_GENRES",
    GET_DETAILS: "GET_DETAILS",
    BY_NAME: "BY_NAME",
    ADD_FAV: "ADD_FAV",
    REMOVE_FAV:"REMOVE_FAV",
    VACIAR: "VACIAR",
    DELETE: "DELETE",
    UPDATE:"UPDATE",
    BY_MAXRATING: "BY_MAXRATING",
    BY_MINRATING: "BY_MINRATING",
    BY_GENRES: "BY_GENRES",
    FILTER_BY_ORIGIN: "FILTER_BY_ORIGIN",
    BY_ASC: "BY_ASC",
    BY_DESC: "BY_DES"
}
const {
    GET_ALL_GAMES,
    GET_GENRES,
    GET_DETAILS,
    BY_NAME,
    BY_GENRES,
    ADD_FAV,
    REMOVE_FAV,
    DELETE,
    BY_ASC,
    BY_DESC,
    VACIAR,
    UPDATE,
    BY_MAXRATING,
    BY_MINRATING,
    FILTER_BY_ORIGIN
}= actions

export function getAllGames(){
    return async function(dispatch){
        try {
            let res= await axios.get(`/videogames`)
            const response= res.data
            return dispatch({type:GET_ALL_GAMES,payload:response})
        } catch (error) {
            alert(e=>"No se conecto bien" + e)
        }
    }
}
export const byName = (name) => async (dispatch) => {
    const response = await axios.get(`/videogames?name=${name}`);
    const res = await response.data;
    console.log(res);
    if (res.error) return alert("Select an existent Breeds");
    dispatch({ type: BY_NAME, payload: res });
  };
  export function addFavGame(payload){
    return {
        type:ADD_FAV,
        payload
    }
}
export function removeFav(payload){
    return {
        type:REMOVE_FAV,
        payload
    }
}
export function deleteDB(id){
    return async function (dispatch){
        try {
            await axios.delete(`/videogames/${id}`)
            return dispatch({type:DELETE, id})
        } catch (error) {
            alert("can´t delete this games due to is already in the api or does not exist")
        }
    }
}
export function filtradoAS(){
    return async function (dispatch){
        try {
            const response = await axios.get(`/filters/asc`);
            const post = await response.data;
            return dispatch({ type: BY_ASC, payload: post });
        } catch (e) {
            return "No se conecto bien";
        }
    }
}
export function filtradoDS(){
    return async function (dispatch){
        try {
            const response = await axios.get(`/filters/desc`);
            const post = await response.data;
            return dispatch({ type: BY_DESC, payload: post });
        } catch (e) {
            return "No se conecto bien";
        }
    }
}
export function postGenres(payload){
    return async function (dispatch){
        try {
             const response = axios.post(`/videogames`, payload);
            
            return response.data
        } catch (error) {
            console.log("no se conecto bien" + error);
        }
         
    }
}
export function getGenres(){
    return async function (dispatch){
     try {
            const res = await axios.get(`/genres`);
            const res_1 = res.data
            dispatch({type:GET_GENRES, payload: res_1 });
            return res_1
        } catch (err) {
            return "en ruta genres f" + err;
        }        
    }
 }
 export function getDetails(id){
    return async function (dispatch){
    try {
        const res=await axios.get(`/videogames/${id}`)
        const response= res.data
        return dispatch({type:GET_DETAILS,payload:response})
    } catch (error) {
        console.log(error);
    }
    }
}
export function vaciar(){
    return {
        type:VACIAR
    }
}
export function update(id){
    return async function (dispatch){
        try {
            console.log(id)
            await axios.put(`/videogames/${id}` )
            return dispatch({type:UPDATE,id})
        } catch (error) {
            alert(error)
        }
    }
}
export function minRating(){
    return async function (dispatch){
        try {
            const response = await axios.get(`/filters/Min`);
            const post = await response.data;
            return dispatch({ type: BY_MINRATING, payload: post });
        } catch (e) {
            return "No se conecto bien";
        }
    }
}
export function maxRating(){
    return async function (dispatch){
        try {
            const response = await axios.get(`/filters/Max`);
            const post = await response.data;
            return dispatch({ type: BY_MAXRATING, payload: post });
        } catch (e) {
            return "No se conecto bien";
        }
    }
}
export function filtradoByGenres(genre) {
    return async function (dispatch) {
      try {
        const response = await axios.get(`/filters/Genres?genre=${genre}`);
        const games = await response.data;
        return dispatch({ type: BY_GENRES, payload: games });
      } catch (e) {
        console.error("Error en la llamada a /Genres: ", e);
        return "No se conectó bien" ;
      }
    };
  }
  export function filtradoByOrigin(payload){
    return{
        type:FILTER_BY_ORIGIN,
        payload
    }
}