import React from 'react'
import './headerComponent.scss'
import {withRouter} from 'react-router-dom'

const Header = ({history}) =>{
    
    // current for frntend stating const vars
    const auth = true // check if user logged in
    
    const handleRoute = (route) =>{
        console.log(route)
        return history.push(route)
    }

    return (
        <div className="header">
            <p onClick={() => handleRoute("/feed")} > Reva </p>
            
            {
                auth ? 
                <div id="accesible">
                    <img src="./images/01.jpg" alt="" onClick={() => handleRoute("/post")} />
                    <img src="./images/01.jpg" alt="" onClick={() => handleRoute("/notification")} />

                    <img src="./images/01.jpg" alt="" onClick={() => handleRoute("/profile")} />


                </div> : null
            }
        </div>
    )
}

export default withRouter(Header)