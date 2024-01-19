import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { byName } from '../../../../redux/actions'
import "../../../../styles/searchBar.css"

function SearchBar({setCurrentPage}) {
  const dis=useDispatch()
  const [Nombre, setNombre] = useState("")
  function handleInput(e){
    e.preventDefault()
    setNombre(e.target.value)
  }
  function handleClick(e){
    e.preventDefault()
    if(Nombre===""){
      alert("set one breed")
    }
    else{
      dis(byName(Nombre))
      setCurrentPage(1)
      setNombre("")
    }
    
  }
  
  return (
    <div>
      <form>
        <input
          className='SearchBInput'
          type="text"
          value={Nombre}
          onChange={e=>handleInput(e)}
          placeholder="Insert Game Name..."
        />
          <button className="SearchBBT" onClick={e=>handleClick(e)}>Search</button>
      </form>
    </div>
  )
}

export default SearchBar