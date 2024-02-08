import React from 'react'
import {Link} from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'
import { removeFav } from '../../../redux/actions'
import Video from "../../../assets/videos/favBackground.mp4"
import CustomVideo from '../../UI/Atoms/CustomVideo'
import "../../../styles/favoritos.css"


function Favorites({setCurrentPage}) {
    const dis=useDispatch()
    const fav=useSelector(state=>state.FavoGames)
    function del(e){
        dis(removeFav(fav))
    }
  return (
    <div key={fav.id} className="doby">
        <CustomVideo Video={Video}/>
        <div className='favHeader'>
            <Link to="/home"><button className="ButtonHomeDet" id="home">Home</button></Link>
            <Link to="/create"><button className="ButtonCreateDet">Create</button></Link>
        </div>
        
        <h2 className="nameFa">Juegos favoritos</h2>
        <div className='favContent'>
            {/* <ul className="ulFav">  */}
            {fav?.map(m=>
            <div key={m.id} className='divFav'>
                <Link to ={"/home/" + m.id} style={{textDecoration:'none'}}>
                    {console.log(m)}
                        <div className="nameCard">
                        <img src={m.background_image} alt="not found" className='imageGame'></img>
                        <h1 className="name">{m.name}</h1>
                        <h3 className="name">{m.genres && m.genres.length ?
                        m.genres.map((e,index)=>{ return <li key={index}><label>{e}</label></li> }) 
                   : "Genres not found"
                  } </h3>
                        </div>
                   
                </Link>
                <button className="delButton" onClick={e=>del(e)} value={m}>X</button>
            </div>
            )}
        {/* </ul> */}
        </div>
        
    </div>
  )
}

export default Favorites