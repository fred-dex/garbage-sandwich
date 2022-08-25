import React, { useState } from "react";

export default function menuItem({ sandwich, onAddToOrder }) {
  const [showSandwichInfo, setShowSandwichInfo] = useState(false);
  function handleClick() {
    setShowSandwichInfo((showSandwichInfo) => !showSandwichInfo);
  }
  function handleAddToOrder() {
    onAddToOrder(sandwich);
  }
  return (
    <div className="MenuItem-container">
      <div>
      <span className="setSandwich" onClick={handleClick}>
        {sandwich.Name}
      </span>
      </div>
      <div className="sandwichImage">
        <img src={sandwich.Image.Bread} alt='bread' />
        <img src={sandwich.Image.Meats} alt='meats' />
        <img src={sandwich.Image.Cheese}alt='cheese' />
        <img src={sandwich.Image.Topping} alt='topping' />
        <img src={sandwich.Image.Sauce} alt='sauce' />
        <img src={sandwich.Image.Veggies}alt='veggies' />
        <img src={sandwich.Image.Gulp}alt='gulp' />
      </div>
      {showSandwichInfo ? (
        <div className="sandwich-info">
          <p>{sandwich.Meats}</p>
          <p>with {sandwich.Cheese}</p>
          <p>fresh {sandwich.Veggies}</p>
          <p>topped with {sandwich.Topping}</p>
          <p>smothered in {sandwich.Sauce}</p>
          <p>piled on a {sandwich.Bread}</p>
        </div>
      ) : null}
      <div>
        <button className="addOrder" onClick={handleAddToOrder}>
        Add This Sandwich To Your Order 
        </button>
      </div>

    </div>
  );
}
