import React, {useState} from 'react'

export default function NewSandwichForm() {
    const [ingredients, setIngredients] = useState([])
  return (
    <div>
        <h2>Build Your Own Sandwich</h2>
        <select>
            <option>Choose a Bread</option>
            {ingredients.map(ingredient=>ingredient.breads?<option ingredient = {ingredient}/>:null)}
        </select>
        <select>
            <option>Choose a Meat</option>
            {ingredients.map(ingredient=>ingredient.meats?<option ingredient = {ingredient}/>:null)}
        </select>
        <select>
            <option>Choose a Cheese</option>
            {ingredients.map(ingredient=>ingredient.cheeses?<option ingredient = {ingredient}/>:null)}
        </select>
        <select>
            <option>Choose a veggie</option>
            {ingredients.map(ingredient=>ingredient.veggies?<option ingredient = {ingredient}/>:null)}
        </select>
        <select>
            <option>Choose a Topping</option>
            {ingredients.map(ingredient=>ingredient.topping?<option ingredient = {ingredient}/>:null)}
        </select>
        <select>
            <option>Choose a Sauce</option>
            {ingredients.map(ingredient=>ingredient.sauces?<option ingredient = {ingredient}/>:null)}
        </select>
        <select>
            <option>Choose a Drink</option>
            {ingredients.map(ingredient=>ingredient.gulps?<option ingredient = {ingredient}/>:null)}
        </select>
    </div>
  )
}
