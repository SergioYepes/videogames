import React from 'react'
import {connect,useSelector,useDispatch} from "react-redux"
import { Link ,useHistory} from 'react-router-dom'
import Card from "../../Atoms/card"
import { addFavGame , deleteDB} from '../../../../redux/actions'

import "../../../../styles/cards.css"


function  Cards({allGames,addFavGames}) {
  const fav=useSelector(state=>state.FavoGames)
  const his=useHistory()
  const dis=useDispatch()
  function handleDelete(id){
    dis(deleteDB(id))
    console.log(allGames[0].id)
    alert("this game was delete")
    his.push("/")
  }

  return (
    <div className="cardHome">
      {allGames &&
        allGames.map((d) => {
          const heart = fav.some((favGame) => favGame.id === d.id) ? "❤️" : "🖤";
          console.log(d.genres);
          return (
            <div key={d.id} className='cardContent'>
              <button
                className="favButtonCard"
                onClick={() => addFavGames({ name: d.name, background_image: d.background_image, genres: d.genres, id: d.id })}
              >
                {heart}
              </button>
              <Link to={"/home/" + d.id} style={{ textDecoration: "none" }}>
                <Card name={d.name} background_image={d.background_image} genres={d.genres} key={d.id} />
              </Link>
              {d.createdInDb ? (
                <button className="favButton" onClick={() => handleDelete(d.id)}>
                  🖤 delete 🖤
                </button>
              ) : (
                <></>
              )}
            </div>
          );
        })}
    </div>
  );
}
function mapDispatchToProps(dispatch){
  return{
    addFavGames: game=>dispatch(addFavGame(game))
  }
}

export default connect(null,mapDispatchToProps)(Cards);