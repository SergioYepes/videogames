import React from 'react'
import "../../../styles/card.css"

function Card({background_image,name,genres}) {
  
  return (
    <div className='divCard'>
      <img src={background_image} alt="not found"  className='imageGame' />
        <div className="nameCard">
            <h1 className="name">{name}</h1>
            <h3 className="name">{genres}</h3>
        </div>
    </div>
  )
}

export default Card