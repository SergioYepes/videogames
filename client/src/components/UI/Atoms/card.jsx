import React from 'react'
import "../../../styles/card.css"


function Card({background_image,name,genres}) {
  return (
    <div className='divCard'>
      <img src={background_image} alt="not found"  className='imageGame' />
        <div className="nameCard">
            <h1 className="name">{name}</h1>
            <div className="genreContainer">
              {genres.map((genre, index) => (
                <h3 key={index} className="nameGenres">{genre}</h3>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Card