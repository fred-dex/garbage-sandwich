import React, {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'
import Option from "./Option"

import Select from './Select'



export default function NewSandwichForm({onAddToOrder}) {
    
    const initialImageState = {Breads:"", Meats:"", Cheeses:"", Veggies:"", Toppings:"", Sauces:"", Gulps:""}
    const initialState = {Name:"", Breads:"", Meats:"", Cheeses:"", Veggies:"", Toppings:"", Sauces:"", Gulps:"",  Price:"$15", Image:sandwichImage}
    const [ingredients, setIngredients] = useState({Breads:{}, Meats:{}, Cheeses:{}, Veggies:{}, Toppings:{}, Sauces:{}, Gulps:{}})
    const [newSandwich, setNewSandwich] = useState(initialState)
    const [sandwichImage, setSandwichImage] = useState(initialImageState)
    let randomSandwichObject = {Breads:"", Meats:"", Cheeses:"", Veggies:"", Toppings:"", Sauces:"", Gulps:""}
    let randomSandwichImage = {Breads:"", Meats:"", Cheeses:"", Veggies:"", Toppings:"", Sauces:"", Gulps:""}
    function randomBread(breadObject){
        let keys = Object.keys(breadObject)
        let choice = keys[Math.floor(Math.random()*keys.length)]
        randomSandwichObject = {...randomSandwichObject, Breads:choice}
        randomSandwichImage = {...randomSandwichImage, Breads:ingredients.Breads[choice]}
    }
    function randomMeat(meatObject){
        let keys = Object.keys(meatObject)
        let choice = keys[Math.floor(Math.random()*keys.length)]
        randomSandwichObject = {...randomSandwichObject, Meats:choice}
        randomSandwichImage = {...randomSandwichImage, Meats:ingredients.Meats[choice]}
    }
    function randomCheese(cheeseObject){
        let keys = Object.keys(cheeseObject)
        let choice = keys[Math.floor(Math.random()*keys.length)]
        randomSandwichObject = {...randomSandwichObject, Cheeses:choice}
        randomSandwichImage = {...randomSandwichImage, Cheeses:ingredients.Cheeses[choice]}
    }
    function randomVeggie(veggieObject){
        let keys = Object.keys(veggieObject)
        let choice = keys[Math.floor(Math.random()*keys.length)]
        randomSandwichObject = {...randomSandwichObject, Veggies:choice}
        randomSandwichImage = {...randomSandwichImage, Veggies:ingredients.Veggies[choice]}
    }
    function randomSauce(sauceObject){
        let keys = Object.keys(sauceObject)
        let choice = keys[Math.floor(Math.random()*keys.length)]
        randomSandwichObject = {...randomSandwichObject, Sauces:choice}
        randomSandwichImage = {...randomSandwichImage, Sauces:ingredients.Sauces[choice]}
    }
    function randomTopping(toppingObject){
        let keys = Object.keys(toppingObject)
        let choice = keys[Math.floor(Math.random()*keys.length)]
        randomSandwichObject = {...randomSandwichObject, Toppings:choice}
        randomSandwichImage = {...randomSandwichImage, Toppings:ingredients.Toppings[choice]}
    }
    function randomGulp(gulpObject){
        let keys = Object.keys(gulpObject)
        let choice = keys[Math.floor(Math.random()*keys.length)]
        randomSandwichObject = {...randomSandwichObject, Gulps:choice}
        randomSandwichImage = {...randomSandwichImage, Gulps:ingredients.Gulps[choice]}
    }
    function randomSandwich(){
        randomBread(ingredients.Breads)
        randomMeat(ingredients.Meats)
        randomCheese(ingredients.Cheeses)
        randomSauce(ingredients.Sauces)
        randomTopping(ingredients.Toppings)
        randomVeggie(ingredients.Veggies)
        randomGulp(ingredients.Gulps)
        console.log(randomSandwichObject)
        console.log(randomSandwichImage)
        setNewSandwich(randomSandwichObject)
        setSandwichImage(randomSandwichImage)
    }
    

    function handleLoad(){
        fetch('http://localhost:4000/imageIngredients')
        .then(res=>res.json())
        .then(data=>setIngredients(data))
    }
    useEffect(handleLoad, [])

    function handleNameChange(e){
        let {name, value } = e.target
        setNewSandwich({...newSandwich, [name]:value})
    }
    function handleChange(e){
        let {name, value } = e.target
        setNewSandwich({...newSandwich, [name]:value})
        setSandwichImage({...sandwichImage, [name]: ingredients[name][value]})
        }
    function handlePlaceOrder(){
        onAddToOrder(newSandwich)
        setNewSandwich(initialState)
        setSandwichImage(initialImageState)
    }
    function handleSaveSandwich(){
        let sandwichForm={
            ...newSandwich,
            Image:{
                ...sandwichImage
            }
        }
        fetch("http://localhost:4000/sandwiches", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(sandwichForm)
        })
        .then(res=>res.json())
        .then(data=>console.log('success', data))
    }
    
  return (
    <div>
        <h2>
        <Link to="/presetsandwichcontainer">
          Choose from One of Our Outrageously Delicious Sandwiches
        </Link> 
        <br />
      <Link to="/newsandwichform">or Build your Own!</Link>
        </h2>
        <button onClick = {randomSandwich}>Random Sandwich</button>
        <form className="NewSandwich">
            <label for="sandwich-name">Name Your Sandwich!</label>
            <input id = 'sandwich-name' type = 'text' name = 'Name' value = {newSandwich.Name} onChange = {handleNameChange}/>
            
            <Select image = {"../images/3.png"} name = {'Breads'} handleChange={handleChange} ingredients = {ingredients.Breads}/>

            <Select image = {"../images/4.png"} name = {'Meats'} handleChange={handleChange} ingredients = {ingredients.Meats}/>

            <Select image = {"../images/5.png"} name = {'Cheeses'} handleChange={handleChange} ingredients = {ingredients.Cheeses}/>

            <Select image = {"../images/6.png"} name = {'Toppings'} handleChange={handleChange} ingredients = {ingredients.Toppings}/>

            <Select image = {"../images/7.png"} name = {'Sauces'} handleChange={handleChange} ingredients = {ingredients.Sauces}/>

            <Select image = {"../images/8.png"} name = {'Veggies'} handleChange={handleChange} ingredients = {ingredients.Veggies}/>
            
            <Select image = {"../images/9.png"} handleChange={handleChange} name = {'Gulps'} ingredients = {ingredients.Gulps}/>

        </form>
        <div className='sandwich-visual-container'>
            <img src= {sandwichImage.Meats}/>
            <img src= {sandwichImage.Breads} />
            <img src= {sandwichImage.Cheeses}/>
            <img src= {sandwichImage.Sauces}/>
            <img src= {sandwichImage.Toppings}/>
            <img src= {sandwichImage.Veggies}/>
            <img src= {sandwichImage.Gulps}/>
        </div>
        <div>
            <button onClick = {handlePlaceOrder} >Add Sandwich to Order</button>
            <button onClick = {handleSaveSandwich}>Save Sandwich</button>
        </div>
    </div>
  )
}
