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
        <img src={sandwich.Image.Bread} />
        <img src={sandwich.Image.Meats} />
        <img src={sandwich.Image.Cheese} />
        <img src={sandwich.Image.Topping} />
        <img src={sandwich.Image.Sauce} />
        <img src={sandwich.Image.Veggies} />
        <img src={sandwich.Image.Gulp} />
      </div>
      {showSandwichInfo ? (
        <div className="sandwich-info">
          <p>{sandwich.Meats}</p>
          <p>with {sandwich.Cheese}</p>
          <p>fresh {sandwich.Veggies}</p>
          <p>topped with {sandwich.Topping}</p>
          <p>smothered in {sandwich.Sauce}</p>
          <p>piled on a {sandwich.Bread}</p>
          <p>paired with a tasty {sandwich.Gulp}</p>
          <p>{sandwich.Price}</p>
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
