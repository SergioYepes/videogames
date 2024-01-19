import React from 'react'
import {Link} from "react-router-dom";

function ButtonLink({route,className,text}) {
  return (
    <Link to={route}>
            <button className={className}><h1><span>{text}</span></h1></button>
    </Link>
  )
}

export default ButtonLink