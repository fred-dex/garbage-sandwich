import React from 'react'

export default function Option({ingredient}) {
  return (
    <option image = {ingredient.Image} value = {ingredient.Name}>{ingredient.Name}</option>
  )
}
