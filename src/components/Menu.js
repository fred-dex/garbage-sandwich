import React, {useEffect, useState} from 'react'
import MenuItem from './MenuItem'
import {Link} from 'react-router-dom'

export default function PresetContainer({onAddToOrder}) {
  //Fetches preset sandwiches from the database
    const [sandwiches, setSandwiches] = useState([])
    function onLoad(){
        fetch ('http://localhost:4000/sandwiches')
        .then (res=>res.json())
        .then (data=>setSandwiches(data))
    }
    useEffect(onLoad, [])
  return (
    <div className='choose'>
       <h2>
        <Link to="/presetsandwichcontainer">
          Choose from One of Our Outrageously Delicious Sandwiches
        </Link> 
        <div className='or'>
          <p>or</p>
        </div>
        <p>
        <Link to="/newsandwichform">Build your Own!</Link>
        </p>
        </h2>
        {sandwiches.map(sandwich=> <MenuItem sandwich = {sandwich} onAddToOrder = {onAddToOrder}/>)}
    </div>
  )
}
