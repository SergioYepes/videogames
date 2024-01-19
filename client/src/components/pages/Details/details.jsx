import React, { useEffect} from 'react'
import {Link, useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { getDetails, vaciar } from '../../../redux/actions'
import "../../../styles/detalles.css"


function Detalles() {
  const dis=useDispatch()
  let gameDetail=useSelector((state=>state.detail))
  const {id}=useParams()
  useEffect(()=>{
    dis(getDetails(id))
    return ()=>dis(vaciar())
  },[dis,id])
  return (
    <div className='divDetails'>
      <Link to="/home"><button className="ButtonHomeDet" id="home">Home</button></Link>
      <Link to="/create"><button className="ButtonCreateDet">Create</button></Link>
      {
        gameDetail.length > 0 ?
          <div>
            <h1 className="nameD">{gameDetail[0].name}</h1>
            <ul className="list">
              <li>
                <img src={gameDetail[0].background_image} alt={gameDetail[0].background_image} className="background_image"/>
              </li>
              <li id="caja">
                <div>
                  <h2 className="characters" id="h2">Generos: </h2>
                  <ul className="allTemps">
                    {gameDetail[0].genres && gameDetail[0].genres.length ?
                        gameDetail[0].genres.map((e,index)=>{ return <li key={index}><label>{e}</label></li> }) 
                   : "Genres not found"
                  } 
                  {console.log(gameDetail[0])}
                  <h4 className="characters">Platforms: </h4>
                    <p>{gameDetail[0].platforms}</p>
                  
                  <h4 className="characters">Rating: </h4>
                    <p>{gameDetail[0].rating}  Stars</p>    
                  
                  <h4 className="characters">Released at: </h4>
                    <p>{gameDetail[0].released}</p>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          :
          <div className="loading">
            <h1><strong>Loading...</strong></h1>
          </div>
      }
    </div>
  )
}

export default Detalles