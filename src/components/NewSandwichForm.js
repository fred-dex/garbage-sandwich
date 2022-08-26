import React, {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'
import Option from "./Option"

import Select from './Select'



export default function NewSandwichForm({onAddToOrder}) {
    
    const initialImageState = {Breads:"", Meats:"", Cheeses:"", Veggies:"", Toppings:"", Sauces:"", Gulps:"", Price:"$15"}
    const initialState = {Name:"", Breads:"", Meats:"", Cheeses:"", Veggies:"", Toppings:"", Sauces:"", Gulps:"", Image:sandwichImage}
    const [ingredients, setIngredients] = useState({Breads:{}, Meats:{}, Cheeses:{}, Veggies:{}, Toppings:{}, Sauces:{}, Gulps:{}})
    const [newSandwich, setNewSandwich] = useState(initialState)
    const [sandwichImage, setSandwichImage] = useState(initialImageState)
    
    

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
    <>
        <div>
            <h2>
            <Link to="/presetsandwichcontainer">
            Choose from One of Our Outrageously Delicious Sandwiches
            </Link> 
            <br />
            <Link to="/newsandwichform">or Build your Own!</Link>
            </h2>
            <form className="NewSandwich">
                <label for="sandwich-name">Name Your Sandwich!</label>
                <input id = 'sandwich-name' type = 'text' name = 'Name' value = {newSandwich.Name} onChange = {handleNameChange}/>

            <div className="new-sandwich-image"> 
            <div className="sandwich-steps">
                <Select image = {"../images/3.png"} name = {'Breads'} handleChange={handleChange} ingredients = {ingredients.Breads}/>

                <Select image = {"../images/4.png"} name = {'Meats'} handleChange={handleChange} ingredients = {ingredients.Meats}/>

                <Select image = {"../images/5.png"} name = {'Cheeses'} handleChange={handleChange} ingredients = {ingredients.Cheeses}/>

                <Select image = {"../images/6.png"} name = {'Toppings'} handleChange={handleChange} ingredients = {ingredients.Toppings}/>
            </div>

            <div className="sandwich-steps">
                <Select image = {"../images/7.png"} name = {'Sauces'} handleChange={handleChange} ingredients = {ingredients.Sauces}/>

                <Select image = {"../images/8.png"} name = {'Veggies'} handleChange={handleChange} ingredients = {ingredients.Veggies}/>
                
                <Select image = {"../images/9.png"} handleChange={handleChange} name = {'Gulps'} ingredients = {ingredients.Gulps}/>
            </div>
            </div>
            </form>
    
            <button className='add-save-sandwich' onClick = {handlePlaceOrder} >Add Sandwich to Order</button>
            <button className='add-save-sandwich' onClick = {handleSaveSandwich}>Save Sandwich</button>
        </div>
        <div className='sandwich-visual-container'>
            <img src= {sandwichImage.Meats}/>
            <img src= {sandwichImage.Breads} />
            <img src= {sandwichImage.Cheeses}/>
            <img src= {sandwichImage.Sauces}/>
            <img src= {sandwichImage.Toppings}/>
            <img src= {sandwichImage.Veggies}/>
            <img src= {sandwichImage.Gulps}/>
        </div>
    </>
  )
}
