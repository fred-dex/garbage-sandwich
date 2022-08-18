import React, { useState, useEffect } from 'react';
import MenuListItems from './MenuListItems'

function Menu() {

    const [buildSandwich, setBuildSandwich] = useState([])

    useEffect(() => {
      console.log('running fetch')
        fetch('http://localhost:4000/buildSandwich')
        .then((r) => r.json())
        .then((sandwich) => {
          setBuildSandwich(sandwich)
        })
      }, [])
console.log(buildSandwich)

    return (
      <div>
        <MenuListItems buildSandwich={buildSandwich} />
        {/* <Ingredients /> */}
      </div>
    )
}

export default Menu