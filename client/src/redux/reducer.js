import {actions} from "./actions"
const {
    GET_ALL_GAMES,
    GET_GENRES,
    BY_NAME,
    ADD_FAV,
    REMOVE_FAV,
    DELETE,
    BY_ASC,
    BY_DESC,
    GET_DETAILS,
    VACIAR,
    UPDATE,
    BY_MAXRATING,
    BY_MINRATING,
    BY_GENRES,
    FILTER_BY_ORIGIN
}= actions
const initialState={
    allGames:[],
    detail:[],
    categories:[],
    sortGames:[],
    FavoGames:[],
    genres:[],
    sort:[]
}
function rootReducer(state=initialState,{type,payload}){
    switch(type){
        case GET_ALL_GAMES:
            return {
                ...state,
                allGames: payload,
                sort:payload
            }
        case BY_NAME:
            return{
                ...state,
                allGames:payload
            }
        case ADD_FAV:{
            return {
                ...state,
                FavoGames: state.FavoGames.concat(payload)
            }
            }
        case REMOVE_FAV:{
                let id=payload.map(e=>e.id)
                return{
                    ...state,
                    FavoGames: state.FavoGames.filter(t=>t.id !== id[0])
                }
            }
        case GET_DETAILS:
                return {
                    ...state,
                   detail:payload
                }
        case VACIAR:
                return{
                    ...state,
                    detail:[]
                }
            
        case GET_GENRES:
           return  {
                ...state,
                genres:payload
                 }
        case BY_ASC:
            return {
                ...state,
                allGames:payload
            }
        case BY_DESC:
            console.log(payload);
                return{
                ...state,
                allGames:payload
                }
        case BY_MINRATING:
            return {
                ...state,
                allGames:payload
            }
        case BY_MAXRATING:
            return {
                ...state,
                 allGames:payload
                }
        case BY_GENRES:
            return {
                ...state,
                 allGames:payload
                } 
        case FILTER_BY_ORIGIN:{
            const all=state.sort
            const origin= payload==="All" ? all: payload==="created" ? all.filter(e=>e.createdInDb) : all.filter(e=>!e.createdInDb)
            return{
                ...state,
                allGames:origin
            }
        }               
        case DELETE:{  
            return state
        }
        case UPDATE:{
            return state
        }
        default:
            return state

    }
}
export default rootReducer