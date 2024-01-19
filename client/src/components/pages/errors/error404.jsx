import React from 'react'
import "../../../styles/error.css"
import {useHistory} from "react-router-dom"

function Error404() {
  const his=useHistory()
  return (
    <>
    
        <button className="favButton" onClick={()=>his.push("/home")}>home</button>
        <div className='error2'>error404</div>
    
    </>
  )
}

export default Error404