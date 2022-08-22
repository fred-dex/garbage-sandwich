import React, { useState } from 'react'

export default function menuItem({sandwich, onAddToOrder}) {
    const [showSandwichInfo, setShowSandwichInfo] = useState(false)
    function handleClick(){
        setShowSandwichInfo(showSandwichInfo=>!showSandwichInfo)
    } 
    function handleAddToOrder(){
      onAddToOrder(sandwich)
    }
  return (
    <div>
        <span onClick = {handleClick}>{sandwich.Name}</span>
        {showSandwichInfo?<p>{sandwich.Meats}, {sandwich.Cheese}, and {sandwich.Veggies} topped with {sandwich.Topping} and covered in {sandwich.Sauce} on {sandwich.Bread} Wash it all down with a tasty glass of ice cold {sandwich.Gulp}</p>:null}
        <button onClick = {handleAddToOrder}>Add This Sandwich To Your Order</button>
    </div>
  )
}
