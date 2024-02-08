import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../../Molecules/searchBar/searchBar.jsx'
import NavButtom  from "../../Atoms/navButton.jsx"
import "../../../../styles/navBar.css"
const LOGO= "https://cdn.dribbble.com/users/23569/screenshots/1830987/media/0ba42d2700410a0952889493d912788d.png"

function NavBar({setCurrentPage}) {
  return (
    <header className="navbar">
                <div className="logo">
                    <Link to='/'>
                        <img src={LOGO} alt="Logo" height='30px'/>
                    </Link>
                </div>
                <div className="links">  
                    <NavButtom className={"FavLink"} route={"/favs"} internalClass={"favButton"} text={"❤️"}/>
                    <NavButtom className={"Link"} route={"/home"} internalClass={"linkToHome"} text={"Home"}/>
                    <NavButtom className={"Link"} route={"/create"} internalClass={"linkToCreate"} text={"Create"}/>      
                </div>
                <div className="searchBar">
                        <SearchBar setCurrentPage={setCurrentPage}/>
                </div>
    </header>
  )
}

export default NavBar