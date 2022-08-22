import React from "react"
import LogIn from './LogIn'

function Header() {
    return(
        <header>
            <div>
                <img src="./images/Garbage-Sandwich.png" alt="Garbage-Sandwich"/>
                <h1>Yummy! Build Your Garbage Sandwich</h1>
                <LogIn />
            </div>
        </header>
        
    );
}

export default Header;