import React from 'react'

export default function Option({ingredient}) {
  return (
    <option value = {ingredient.Name}>{ingredient.Name}</option>
  )
}
