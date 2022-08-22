import React, { useState } from 'react';

    function MenuListItems({ Breads, Cheeses, Meats, Toppings, Sauces, Veggies, Gulps }) {

        const [isClicked, setIsClicked] = useState(false)

        const handleClick = () => {setIsClicked(!isClicked)}
        
        console.log(isClicked)
    
    return (
        <div>
        <div className="images">
    <div className='Bread'> 
        <i className="fa-solid fa-caret-down"></i>
        <div onClick={(e) => setIsClicked(!isClicked)}>
        <img src="../images/3.png" alt="Bread" />
        </div>
            <div className='dropdown'> 
            <div className='dropdown-menu' key={Breads}>
        </div>
    </div>
</div>

    <div className='Meats'>
        <div onClick={handleClick}>
        <img src="../images/4.png" alt="Meats" />
        </div>
            <div className='dropdown'> 
            <div className='dropdown-menu' key={Meats}>
        </div>
    </div>
</div>

<div className='Cheeses'>
        <div onClick={handleClick}>
        <img src="../images/5.png" alt="Cheeses"/>
        </div>
            <div className='dropdown'> 
            <div className='dropdown-menu' key={Cheeses}>
        </div>
    </div>
</div>

<div className='Toppings'>
        <div onClick={handleClick}>
        <img src="../images/6.png" alt="Toppings"/>
        </div>
            <div className='dropdown'> 
            <div className='dropdown-menu' key={Toppings}>
        </div>
    </div>
</div>

<div className='Sauces'>
        <div onClick={handleClick}>
        <img src="../images/7.png" alt="sauce"/>
        </div>
            <div className='dropdown'> 
            <div className='dropdown-menu'key={Sauces}>
        </div>
    </div>
</div>

<div className='Veggies'>
        <div onClick={handleClick}>
        <img src="../images/8.png" alt="Veggies"/>
        </div>
            <div className='dropdown'> 
            <div className='dropdown-menu'key={Veggies}>
        </div>
    </div>
</div>

<div className='Gulps'>
        <div onClick={handleClick}>
        <img src="../images/9.png" alt="gulps"/>
        </div>
            <div className='dropdown'> 
            <div className='dropdown-menu' key={Gulps}>
        </div>
        </div>
    </div>
</div>
</div>
 )
}
export default MenuListItems;