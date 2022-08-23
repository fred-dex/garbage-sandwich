import React, {useState, useEffect} from 'react'
import Option from "./Option"
import "../styles/NewSandwich.css"

export default function NewSandwichForm() {
    const initialState = {Name:"", Breads:"", Meats:"", Cheeses:"", Veggies:"", Toppings:"", Sauces:"", Gulps:"", Image:{Breads:"", Meats:"", Cheeses:"", Veggies:"", Toppings:"", Sauces:"", Gulps:""}}
    const [ingredients, setIngredients] = useState({Breads:[], Meats:[], Cheeses:[], Veggies:[], Toppings:[], Sauces:[], Gulps:[]})
    const [newSandwich, setNewSandwich] = useState(initialState)
    const [sandwichImage, setSandwichImage] = useState({Breads:"", Meats:"", Cheeses:"", Veggies:"", Toppings:"", Sauces:"", Gulps:""})

    function handleLoad(){
        fetch('http://localhost:4000/ingredients')
        .then(res=>res.json())
        .then(data=>setIngredients(data))
    }
    useEffect(handleLoad, [])

    function handleChange(e){
        let {name, value } = e.target
        setNewSandwich({...newSandwich, [name]:value})
        console.log(name);
        setSandwichImage({
            ...sandwichImage,
            [name]:ingredients[name].Image
        })
    }
  return (
    <div>
        <h2>Build Your Own Sandwich</h2>
        <form className="NewSandwich">
            <input type = 'text' name = 'Name' value = {newSandwich.Name} onChange = {handleChange}/>

            <select name = 'Breads' onChange = {handleChange} value = {newSandwich.Breads}>
                <option>Choose a Bread</option>
                {ingredients.Breads.map(ingredient=><Option ingredient = {ingredient}/>)}
            </select>

            <select name = 'Meats' onChange = {handleChange} value = {newSandwich.Meats}>
                <option>Choose a Meat</option>
                {ingredients.Meats.map(ingredient=><Option ingredient = {ingredient}/>)}
            </select>

            <select name = 'Cheeses' value = {newSandwich.Cheeses} onChange = {handleChange}>
                <option>Choose a Cheese</option>
                {ingredients.Cheeses.map(ingredient=><Option ingredient = {ingredient}/>)}
            </select>

            <select value = {newSandwich.Veggies} name = 'Veggies' onChange = {handleChange}>
                <option>Choose a veggie</option>
                {ingredients.Veggies.map(ingredient=><Option ingredient = {ingredient}/>)}
            </select>

            <select value = {newSandwich.Toppings} name = 'Toppings' onChange = {handleChange}>
                <option>Choose a Topping</option>
                {ingredients.Toppings.map(ingredient=><Option ingredient = {ingredient}/>)}
            </select>

            <select value = {newSandwich.Sauces} name = 'Sauces' onChange = {handleChange}>
                <option>Choose a Sauce</option>
                {ingredients.Sauces.map(ingredient=><Option ingredient = {ingredient}/>)}
            </select>

            <select value = {newSandwich.Gulps} name = 'Gulps' onChange = {handleChange}>
                <option>Choose a Drink</option>
                {ingredients.Gulps.map(ingredient=><Option ingredient = {ingredient}/>)}
            </select>
        </form>
        <div className='sandwich-visual-container'>
            <img  alt="topping" src= {newSandwich.Image.Breads} />
            <img  alt="topping" src= {newSandwich.Image.Meats}/>
            <img  alt="topping" src= {newSandwich.Image.Cheeses}/>
            <img  alt="topping" src= {newSandwich.Image.Sauces}/>
            <img  alt="topping" src= {newSandwich.Image.Toppings}/>
            <img  alt="topping" src= {newSandwich.Image.Veggies}/>
            <img  alt="topping" src= {newSandwich.Image.Gulps}/>
        </div>
    </div>
  )
}
