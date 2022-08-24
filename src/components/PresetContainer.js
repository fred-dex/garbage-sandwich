import React, {useEffect, useState} from 'react'
import MenuItem from './MenuItem'

export default function PresetContainer({onAddToOrder}) {
    const [sandwiches, setSandwiches] = useState([])
    function onLoad(){
        fetch ('http://localhost:4000/sandwiches')
        .then (res=>res.json())
        .then (data=>setSandwiches(data))
    }
    useEffect(onLoad, [])
  return (
    <div>
      <h2>Choose from One of Our Outrageously Delicious Sandwiches</h2>
        {sandwiches.map(sandwich=> <MenuItem sandwich = {sandwich} onAddToOrder = {onAddToOrder}/>)}
      <h2>or Build your Own!</h2>
    </div>
  )
}
