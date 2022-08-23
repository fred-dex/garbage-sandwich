import React, {useState, useEffect} from 'react'
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
        <h2>Build Your Own Sandwich---Pile it On, Get Trashy!</h2>
        <form className="NewSandwich">
            <input type = 'text' name = 'Name' value = {newSandwich.Name} onChange = {handleChange}/>

            <select name = 'Breads' onChange = {handleChange} value = {newSandwich.Breads}>
                <option>Choose a Bread</option>
                {ingredients.Breads.map(ingredient=><Option ingredient = {ingredient}/>)}
            </select>

            <select name = 'Meats' onChange = {handleChange} value = {newSandwich.Meats}>
<<<<<<< HEAD
                <option><p>Choose a Meat</p></option>
                {ingredients.map(ingredient=>ingredient.Meats?<Option ingredient = {ingredient.Meats}/>:null)}
=======
                <option>Choose a Meat</option>
                {ingredients.Meats.map(ingredient=><Option ingredient = {ingredient}/>)}
>>>>>>> 5ac6c3f13f4064ea8ad56a424f62c65ab84facad
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
