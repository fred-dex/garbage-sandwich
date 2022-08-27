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
        〰️{sandwich.Name}〰️
      </span>
      </div>
      <div className="sandwichImage">
        <img src={sandwich.Image.Breads} />
        <img src={sandwich.Image.Meats} />
        <img src={sandwich.Image.Cheeses} />
        <img src={sandwich.Image.Toppings} />
        <img src={sandwich.Image.Sauces} />
        <img src={sandwich.Image.Veggies} />
        <img src={sandwich.Image.Gulps} />
      </div>
      {showSandwichInfo ? (
        <div className="sandwich-info">
          <p>{sandwich.Meats}</p>
          <p>with {sandwich.Cheeses}</p>
          <p>fresh {sandwich.Veggies}</p>
          <p>topped with {sandwich.Toppings}</p>
          <p>smothered in {sandwich.Sauces}</p>
          <p>piled on a {sandwich.Breads}</p>
          <p>paired with a tasty {sandwich.Gulps}</p>
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
