import React, { useEffect} from 'react'
import {Link, useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { getDetails, vaciar } from '../../../redux/actions'
import CustomVideo from "../../UI/Atoms/CustomVideo"
import Video from "../../../assets/videos/detailsBackground.mp4"
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
      <CustomVideo Video={Video}/>
      <header className='detailsHeader'>
        <Link to="/home"><button className="ButtonHomeDet" id="home">Home</button></Link>
        <Link to="/create"><button className="ButtonCreateDet">Create</button></Link>
      </header>
      
      {
        gameDetail.length > 0 ?
          <section>
            <h1 className="nameD">{gameDetail[0].name}</h1>
            <ul className="list">
              <li className='detImage'>
                <img src={gameDetail[0].background_image} alt={gameDetail[0].background_image} className="background_image"/>
              </li>
              <li id="caja">
                <div>
                  <div className='firstDetCont'>
                     <h2 className="characters" id="h2">Generos: </h2>
                      <ul className="allGenres">
                        {gameDetail[0].genres && gameDetail[0].genres.length ?
                            gameDetail[0].genres.map((e,index)=>{ return <li key={index}><p>{e}</p></li> }) 
                      : "Genres not found"
                      } 
                      {console.log(gameDetail[0])}
                      </ul>
                  </div>
                  <div className='secondDetCont'>
                    <h2 className="characters">Platforms: </h2>
                    <p>{gameDetail[0].platforms}</p>  
                  </div>  
                  
                   <div className='thirdDetCont'>
                     <h2 className="characters">Rating: </h2>
                    <p>{gameDetail[0].rating}  Stars</p>   
                  </div> 
                    
                   <div className='fourthDetCont'>
                     <h2 className="characters">Released at: </h2>
                    <p>{gameDetail[0].released}</p> 
                  </div> 
                  
                  
                </div>
              </li>
            </ul>
          </section>
          :
          <div className="loading">
            <h1><strong>Loading...</strong></h1>
          </div>
      }
    </div>
  )
}

export default Detalles