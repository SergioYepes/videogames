import React from 'react'
import ButtonLink from '../../UI/Atoms/buttonLink'
import "../../../styles/landing.css"

function Landing() {
  return (
    <div className="divLanding">
        <ButtonLink route={"/home"} className={"homeButton"} text={"home"}/>
        <ButtonLink route={"/create"} className={"createButton"} text={"create"}/>
        
        <h1 className="h1">It's time for a new videogame exploration</h1>
    </div>
  )
}

export default Landing