import React from 'react'
import './headerComponent.scss'


const Header = () =>{
    
    // current for frntend stating const vars
    const auth = false // check if user logged in
    

    return (
        <div className="header">
            <p> Reva </p>

            {
                auth ? 
                <div id="accesible">
                    <img src="" alt="" />

                </div> : null
            }
        </div>
    )
}

export default Header