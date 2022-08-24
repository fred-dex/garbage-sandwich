import React from "react"
import LogIn from './LogIn'
import { Link } from 'react-router-dom'

function Header() {
    return(
        <header>
            <div>
                <img src="./images/Garbage-Sandwich.png" alt="Garbage-Sandwich"/>
                <h1>Yummy! Build Your Garbage Sandwich</h1>
                <LogIn />
                
                <Link to="/">Home</Link>
                <Link to="/newsandwichform"> New Sandwich Form</Link>
                
            </div>
        </header>
        
    );
}

export default Header;