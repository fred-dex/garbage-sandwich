import React from "react"
import LogIn from './LogIn'
import { Link } from 'react-router-dom'
// import {NewSandwichForm} from './NewSandwichForm'

function Header() {
    return(
        <header>
            <div>
                <img src="./images/Garbage-Sandwich.png" alt="Garbage-Sandwich"/>
                <h1>
                    <p>Here at Garbage Sandwich we Celebrate the Dedadence and Deliciousness of a Great Sandwich!
                    </p>
                    <p>
                    Our Mission is to Source the Best Ingredients from Local Farmers, and the Top Quality Sustainable Sources of Meats, Fish, and Produce Available.
                    </p>
                </h1>

            </div>
        </header>  
    );
}

export default Header;