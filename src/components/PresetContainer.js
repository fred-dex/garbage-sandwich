import React, {useEffect, useState} from 'react'
import MenuItem from './MenuItem'
import {Link} from 'react-router-dom'

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
       <h2>
        <Link to="/presetsandwichcontainer">
          Choose from One of Our Outrageously Delicious Sandwiches
        </Link> 
        <br />
        <Link to="/newsandwichform">or Build your Own!</Link>
        </h2>
        <h3>All Sandwiches paired with a Tasty Gulper! $15</h3>
        {sandwiches.map(sandwich=> <MenuItem sandwich = {sandwich} onAddToOrder = {onAddToOrder}/>)}
    </div>
  )
}
