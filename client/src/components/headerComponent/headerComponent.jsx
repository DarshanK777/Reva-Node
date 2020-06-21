import React from 'react'
import './headerComponent.scss'


const Header = () =>{
    
    // current for frntend stating const vars
    const auth = true // check if user logged in
    

    return (
        <div className="header">
            <p> Reva </p>

            {
                auth ? 
                <div id="accesible">
                    <img src="./images/01.jpg" alt="" />
                    <img src="./images/01.jpg" alt="" />

                    <img src="./images/01.jpg" alt="" />


                </div> : null
            }
        </div>
    )
}

export default Header