import React, {useState} from 'react'
import Option from './Option'

export default function Select({ingredients, name, handleChange, image}) {
  const [clicked, setClicked] = useState(false)
  function handleClick(){
    setClicked(!clicked)
  }
  return (
    <div>
      <img className="select-sandwich" src = {image} onClick = {handleClick}/>
      {clicked?<select name = {name} onChange = {handleChange}>
        <option value = ''></option>
        {Object.keys(ingredients).map(ingredient=><Option ingredient = {ingredient}/>)}
      </select>:null}
    </div>
  )
}
