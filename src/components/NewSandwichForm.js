import React, {useState, useEffect} from 'react'
import Option from "./Option"
import "../styles/NewSandwich.css"
import Select from './Select'

export default function NewSandwichForm() {
    const initialState = {Name:"", Breads:"", Meats:"", Cheeses:"", Veggies:"", Toppings:"", Sauces:"", Gulps:"", Image:{Breads:"", Meats:"", Cheeses:"", Veggies:"", Toppings:"", Sauces:"", Gulps:""}}
    const [ingredients, setIngredients] = useState({Breads:{}, Meats:{}, Cheeses:{}, Veggies:{}, Toppings:{}, Sauces:{}, Gulps:{}})
    const [newSandwich, setNewSandwich] = useState(initialState)
    const [sandwichImage, setSandwichImage] = useState({Breads:"", Meats:"", Cheeses:"", Veggies:"", Toppings:"", Sauces:"", Gulps:""})
    const [showDropdown, setShowDropdown] = useState(true)

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
    function handleShowDropdown(){
        setShowDropdown(!showDropdown)
    }
  return (
    <div>
        <h2>Build Your Own Garbage Sandwich---Pile it On, Get Trashy!</h2>
        <form className="NewSandwich">
            <input type = 'text' name = 'Name' value = {newSandwich.Name} onChange = {handleChange}/>
            {showDropdown?
           <Select name = {'Breads'} handleChange={handleChange} ingredients = {ingredients.Breads}/>:<img src="../images/3.png" alt="Bread" />}


            {showDropdown?
            <Select name = {'Meats'} handleChange={handleChange} ingredients = {ingredients.Meats}/>:<img src="../images/4.png" alt="Meats" />}


            {showDropdown?
            <Select name = {'Cheeses'} handleChange={handleChange} ingredients = {ingredients.Cheeses}/>:<img src="../images/5.png" alt="Cheeses"/>}

            {showDropdown?
            <Select name = {'Veggies'} handleChange={handleChange} ingredients = {ingredients.Veggies}/>:<img src="../images/8.png" alt="Veggies"/>}

            {showDropdown?
            <Select name = {'Toppings'} handleChange={handleChange} ingredients = {ingredients.Toppings}/>:<img src="../images/6.png" alt="Toppings"/>}


            {showDropdown?
            <Select name = {'Sauces'} handleChange={handleChange} ingredients = {ingredients.Sauces}/>:<img src="../images/7.png" alt="sauce"/>}

            {showDropdown?
            <Select handleChange={handleChange} name = {'Gulps'} ingredients = {ingredients.Gulps}/>:<img src="../images/9.png" alt="gulps"/>}
        </form>
        <div className='sandwich-visual-container'>
            <img  alt="topping" src= {sandwichImage.Breads} />
            <img  alt="topping" src= {sandwichImage.Meats}/>
            <img  alt="topping" src= {sandwichImage.Cheeses}/>
            <img  alt="topping" src= {sandwichImage.Sauces}/>
            <img  alt="topping" src= {sandwichImage.Toppings}/>
            <img  alt="topping" src= {sandwichImage.Veggies}/>
            <img  alt="topping" src= {sandwichImage.Gulps}/>
        </div>
    </div>
  )
}
