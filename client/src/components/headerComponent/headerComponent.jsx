import React from 'react'
import './headerComponent.scss'
import ButtonElement from '../btnComponent/btnComponent'

const Header = () =>{
    
    // current for frntend stating const vars
    const auth = false // check if user logged in
    
    const handleOnClick = () =>{
        // handle refirect to wherever it need to be directed
    }

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