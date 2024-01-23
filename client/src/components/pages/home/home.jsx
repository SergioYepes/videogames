import React, { useState,useEffect } from 'react'
import Cards from '../../UI/Molecules/cards/cards'
import {useDispatch, useSelector} from "react-redux"
import { getAllGames } from '../../../redux/actions'
import NavBar from "../../UI/Organisms/navBar/navBar"
import Paginado from '../../UI/Organisms/Paginado/paginado'
import Filtros from '../../UI/Organisms/Filtrado/filtros'
import Video from "../../../assets/videos/homeBackground.mp4"
import "../../../styles/home.css"
const gift="https://i.pinimg.com/originals/53/ed/3f/53ed3f69d8af8e1fb7b0025a97452e38.gif"

function Home() {
    const dispatch=useDispatch()
    const allGames=useSelector((state)=>state.allGames)

    const[loading,setLoading]=useState(true)
    const[currentPage,setCurrentPage]=useState(1)
    const[gamePerPg]=useState(16)
    const inLastGame= currentPage*gamePerPg
    const inFirstGame= inLastGame-gamePerPg
    const currentGame=allGames.slice(inFirstGame,inLastGame)
    const [showFilters, setShowFilters] = useState(false);

    const paginado=(pageN)=>{
      setCurrentPage(pageN)
    }

    useEffect(()=>{
        dispatch(getAllGames())
        setLoading(false)
    },[dispatch])
   function handleChange(){
      setShowFilters(!showFilters);
   }
    
  return (
    <div className='home'>
      <div className="video-container">
          <video autoPlay loop playsInline muted className="video-bg">
            <source src={Video} type="video/mp4" />
            Tu navegador no admite el elemento de video.
          </video>
      </div>
        <button className="filtros" onClick={handleChange}>{showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}</button>
      <div className='divHeader'>
        <NavBar setCurrentPage={setCurrentPage}/>
        <h1 className="welcome">🤘Bienvenido/a🤘</h1>
      </div>
      {loading?<img src={gift} alt="Loading..."/>:
      <div className='divContent'>
        {showFilters && <Filtros setCurrentPage={setCurrentPage} />}
          <div className="paginado">
          <Paginado gamePerPg={gamePerPg} allGames={allGames.length} paginado={paginado} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
        <div><Cards allGames={currentGame}/></div>
        <div className="paginado">
          <Paginado gamePerPg={gamePerPg} allGames={allGames.length} paginado={paginado} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
      </div>
          }
    </div>
  )
}

export default Home