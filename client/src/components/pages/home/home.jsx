import React, { useState,useEffect } from 'react'
import Cards from '../../UI/Molecules/cards/cards'
import {useDispatch, useSelector} from "react-redux"
import { getAllGames } from '../../../redux/actions'
import NavBar from "../../UI/Organisms/navBar/navBar"
import Paginado from '../../UI/Organisms/Paginado/paginado'
import Filtros from '../../UI/Organisms/Filtrado/filtros'
import "../../../styles/home.css"
const gift="https://i.pinimg.com/originals/53/ed/3f/53ed3f69d8af8e1fb7b0025a97452e38.gif"

function Home() {
    const dispatch=useDispatch()
    const allGames=useSelector((state)=>state.allGames)

    const[loading,setLoading]=useState(true)
    const[currentPage,setCurrentPage]=useState(1)
    const[gamePerPg]=useState(8)
    const inLastGame= currentPage*gamePerPg
    const inFirstGame= inLastGame-gamePerPg
    const currentGame=allGames.slice(inFirstGame,inLastGame)

    const paginado=(pageN)=>{
      setCurrentPage(pageN)
    }


    useEffect(()=>{
        dispatch(getAllGames())
        setLoading(false)
    },[dispatch])
   
    
  return (
    <div className='home'>
      <div className='divTotal'>
        <NavBar setCurrentPage={setCurrentPage}/>
        <h1 className="welcome">🤘Bienvenido/a🤘</h1>
        <div className="filtros"><Filtros setCurrentPage={setCurrentPage} /></div>
        </div>
      {loading?<img src={gift} alt="Loading..."/>:
        <div>
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