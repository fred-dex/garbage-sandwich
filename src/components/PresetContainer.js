import React, {useEffect, useState} from 'react'
import MenuItem from './MenuItem'

export default function PresetContainer({onAddToOrder}) {
    const [sandwiches, setSandwiches] = useState([])
    function onLoad(){
        fetch ('http://localhost:4000/Sandwiches')
        .then (res=>res.json())
        .then (data=>setSandwiches(data))
    }
    useEffect(onLoad, [])
  return (
    <div>
      <p>Choose from one of our Delicious Sandwiches</p>
        {sandwiches.map(sandwich=> <MenuItem sandwich = {sandwich} onAddToOrder = {onAddToOrder}/>)}
      <p>or Build your Own!</p>
    </div>
  )
}
