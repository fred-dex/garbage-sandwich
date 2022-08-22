import React, { useState } from 'react'

export default function menuItem({sandwich}) {
    const [showSandwichInfo, setShowSandwichInfo] = useState(false)
    function handleClick(){
        setShowSandwichInfo(showSandwichInfo=>!showSandwichInfo)
    } 
  return (
    <div>
        <span onClick = {handleClick}>{sandwich.name}</span>
        {showSandwichInfo?<p>{sandwich.Meat}, {sandwich.Cheese}, and {sandwich.Veggies} topped with {sandwich.Topping} and covered in {sandwich.Sauce} Wash it all down with a tasty glass of ice cold {sandwich.Gulp}</p>:null}
        <button>Order This Tasty Sandwich</button>
    </div>
  )
}
