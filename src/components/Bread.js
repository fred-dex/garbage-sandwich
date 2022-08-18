import React, { useState } from 'react';


function Bread({ Breads }) {

    const [isActive, setIsActive] = useState(false)

    return (
    <div className="images">
        <div className='Bread'> 
          <div className='dropdown'> 
            <div className='dropdown-menu' onClick={(e) => setIsActive(!isActive)}>
            <button>
                 <i className="fa-solid fa-caret-down"></i>
                <img src="../images/3.png" alt="Bread"/>  
            </button> 
            </div>
            {isActive && (
                <div className="dropdown-content">
                        <div onClick={(e) => { 
                            setIsActive(false);
                            // buildSandwich={bread}
                    }} 
                    className='dropdown-item'>
                    {Breads}
                </div>
            </div>
            )}
        </div>  
    </div>
 </div>
)}

            
export default Bread