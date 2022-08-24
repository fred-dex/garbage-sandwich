import React, {useState, useEffect} from 'react'
<<<<<<< HEAD
import {Link} from 'react-router-dom'
import Option from "./Option"

=======
import "../styles/NewSandwich.css"
import Select from './Select'
>>>>>>> a9b6a2f95ef6fd0ed88b80accb7a099e31038d07

export default function NewSandwichForm() {
    const initialState = {Name:"", Breads:"", Meats:"", Cheeses:"", Toppings:"", Sauces:"", Veggies:"", Gulps:"", Image:{sandwichImage}}
    const [ingredients, setIngredients] = useState({Breads:{}, Meats:{}, Cheeses:{}, Veggies:{}, Toppings:{}, Sauces:{}, Gulps:{}})
    const [newSandwich, setNewSandwich] = useState(initialState)
    const [sandwichImage, setSandwichImage] = useState({Breads:"", Meats:"", Cheeses:"", Toppings:"", Sauces:"", Veggies:"", Gulps:""})
    

    function handleLoad(){
        fetch('http://localhost:4000/imageIngredients')
        .then(res=>res.json())
        .then(data=>setIngredients(data))
    }
    useEffect(handleLoad, [])

    function handleChange(e){
        let {name, value } = e.target
        setNewSandwich({...newSandwich, [name]:value})
        setSandwichImage({...sandwichImage, [name]: ingredients[name][value]})
        }
    
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
            <label for="sandwich-name">Name Your Sandwich!</label>
            <input id = 'sandwich-name' type = 'text' name = 'Name' value = {newSandwich.Name} onChange = {handleChange}/>
            
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
    </div>
  )
}
