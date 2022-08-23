import React, {useState, useEffect} from 'react'
import Option from "./Option"


export default function NewSandwichForm() {
    const initialState = {Name:"", Breads:"", Meats:"", Cheeses:"", Veggies:"", Toppings:"", Sauces:"", Gulps:"", Image:{}}
    const [ingredients, setIngredients] = useState([])
    const [newSandwich, setNewSandwich] = useState(initialState)
    const [sandwichImage, setSandwichImage] = useState(newSandwich.Image)

    function handleLoad(){
        fetch('http://localhost:4000/ingredients')
        .then(res=>res.json())
        .then(data=>setIngredients(data))
    }
    useEffect(handleLoad, [])

    function handleChange(e){
        let {name, value} = e.target
        setNewSandwich({...newSandwich, [name]:value})
    }
  return (
    <div>
        <h2>Build Your Own Sandwich---Pile it On, Get Trashy!</h2>
        <form className="NewSandwich">
            <input type = 'text' name = 'Name' value = {newSandwich.Name} onChange = {handleChange}/>

            <select name = 'Breads' onChange = {handleChange} value = {newSandwich.Breads}>
                <option>Choose a Bread</option>
                {ingredients.map(ingredient=>ingredient.Breads?<Option ingredient = {ingredient.Breads}/>:null)}
            </select>

            <select name = 'Meats' onChange = {handleChange} value = {newSandwich.Meats}>
                <option><p>Choose a Meat</p></option>
                {ingredients.map(ingredient=>ingredient.Meats?<Option ingredient = {ingredient.Meats}/>:null)}
            </select>

            <select name = 'Cheeses' value = {newSandwich.Cheeses} onChange = {handleChange}>
                <option>Choose a Cheese</option>
                {ingredients.map(ingredient=>ingredient.Cheeses?<Option ingredient = {ingredient.Cheeses}/>:null)}
            </select>

            <select value = {newSandwich.Veggies} name = 'Veggies' onChange = {handleChange}>
                <option>Choose a veggie</option>
                {ingredients.map(ingredient=>ingredient.Veggies?<Option ingredient = {ingredient.Veggies}/>:null)}
            </select>

            <select value = {newSandwich.Toppings} name = 'Toppings' onChange = {handleChange}>
                <option>Choose a Topping</option>
                {ingredients.map(ingredient=>ingredient.Topping?<Option ingredient = {ingredient.Toppings}/>:null)}
            </select>

            <select value = {newSandwich.Sauces} name = 'Sauces' onChange = {handleChange}>
                <option>Choose a Sauce</option>
                {ingredients.map(ingredient=>ingredient.Sauces?<Option ingredient = {ingredient.Sauces}/>:null)}
            </select>

            <select value = {newSandwich.Gulps} name = 'Gulps' onChange = {handleChange}>
                <option>Choose a Drink</option>
                {ingredients.map(ingredient=>ingredient.Gulps?<Option ingredient = {ingredient.Gulps}/>:null)}
            </select>
        </form>
    </div>
  )
}
