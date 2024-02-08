import React from 'react'
import ButtonLink from '../../UI/Atoms/buttonLink'
import "../../../styles/landing.css"
import CustomVideo from '../../UI/Atoms/CustomVideo'
import Video from "../../../assets/videos/background.mp4"

function Landing() {
  return (
    <div className="divLanding">
        <CustomVideo Video={Video}/>
        <div className="content">
          <h1 className="h1">It's time for a new Videogame exploration</h1>
          <div className='landingButtons'>
            <ButtonLink route={"/home"} className={"homeButton"} text={"Home"}/>
            <ButtonLink route={"/create"} className={"createButton"} text={"Create"}/>
          </div>
        </div>
        
        
    </div>
  )
}

export default Landing