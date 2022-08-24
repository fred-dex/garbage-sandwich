import React from 'react'
import Option from './Option'

export default function Select({ingredients, name, handleChange}) {
  return (
    <select name = {name} onChange = {handleChange}> 
        {Object.keys(ingredients).map(ingredient=><Option ingredient = {ingredient}/>)}
    </select>
  )
}
