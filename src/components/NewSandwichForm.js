import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Option from "./Option"


export default function NewSandwichForm() {
    const initialState = {Name:"", Breads:"", Meats:"", Cheeses:"", Veggies:"", Toppings:"", Sauces:"", Gulps:"", Image:{Breads:"", Meats:"", Cheeses:"", Veggies:"", Toppings:"", Sauces:"", Gulps:""}}
    const [ingredients, setIngredients] = useState({Breads:[], Meats:[], Cheeses:[], Veggies:[], Toppings:[], Sauces:[], Gulps:[]})
    const [newSandwich, setNewSandwich] = useState(initialState)
    const [sandwichImage, setSandwichImage] = useState(newSandwich.Image)

    function handleLoad(){
        fetch('http://localhost:4000/ingredients')
        .then(res=>res.json())
        .then(data=>setIngredients(data))
    }
    useEffect(handleLoad, [])

    function handleChange(e){
        let {name, value, image} = e.target
        setNewSandwich({...newSandwich, [name]:value})
        setSandwichImage({...sandwichImage, [name]:image})
    }
    console.log(ingredients)
  return (
    <div>
        <Link to="*">Home</Link>
        <h2>
        <Link to="/presetsandwichcontainer">
          Choose from One of Our Outrageously Delicious Sandwiches
        </Link> 
        <br />
      <Link to="/newsandwichform">or Build your Own!</Link>
        </h2>
        <form className="NewSandwich">
            <input type = 'text' name = 'Name' value = {newSandwich.Name} onChange = {handleChange}/>

            <select name = 'Breads' value = {newSandwich.Breads} onChange = {handleChange}>
                
                <option>Choose a Bread</option>
                {ingredients.Breads.map(ingredient=><Option ingredient = {ingredient}/>)}
            </select>

            <select name = 'Meats' value = {newSandwich.Meats} onChange = {handleChange}>

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
        <div>
            <img src = {newSandwich.Image.Breads} />
            <img src = {newSandwich.Image.Meats}/>
            <img src = {newSandwich.Image.Cheeses}/>
            <img src = {newSandwich.Image.Sauces}/>
            <img src = {newSandwich.Image.Toppings}/>
            <img src = {newSandwich.Image.Veggies}/>
            <img src = {newSandwich.Image.Gulps}/>
        </div>
    </div>
  )
}
