import React from 'react'
import {Link} from "react-router-dom"

function NavButton({className,route,internalClass,text}) {
  return (
    <div>
        <Link className={className} to={route}>
            <div className={internalClass} >{text}</div>
        </Link>
    </div>
  )
}

export default NavButton