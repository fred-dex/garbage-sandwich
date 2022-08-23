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
      <span className="setSandwich" onClick={handleClick}>
        {sandwich.Name}
      </span>
      {showSandwichInfo ? (
        <>
          <p>{sandwich.Meats}</p>
          <p>with {sandwich.Cheese}</p>
          <p>fresh {sandwich.Veggies}</p>
          <p>topped with {sandwich.Topping}</p>
          <p>smothered in {sandwich.Sauce}</p>
          <p>piled on a {sandwich.Bread}</p>
        </>
      ) : null}
      <div>
        <button className="addOrder" onClick={handleAddToOrder}>
          Add This Sandwich To Your Order
        </button>
      </div>
      <div className="sandwichImage">
        <img src={sandwich.Image.Bread} />
        <img src={sandwich.Image.Meats} />
        <img src={sandwich.Image.Veggies} />
        <img src={sandwich.Image.Topping} />
        <img src={sandwich.Image.Sauce} />
        <img src={sandwich.Image.Gulp} />
      </div>
    </div>
  );
}
