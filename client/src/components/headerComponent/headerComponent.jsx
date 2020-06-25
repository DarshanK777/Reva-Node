import React from 'react'
import './headerComponent.scss'
import {withRouter} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = ({history}) =>{
    
    // current for frntend stating const vars
    const {isAuthenticated} = useSelector(state => state.user)
    
    const handleRoute = (route) =>{
        return history.push(route)
    }

    return (
        <div className="header">
            <p onClick={() => handleRoute("/feed")} > Reva </p>
            
            {
                isAuthenticated ? 
                <div id="accesible">
                    <img src="./images/01.jpg" alt="a" onClick={() => handleRoute("/post")} />
                    <img src="./images/01.jpg" alt="b" onClick={() => handleRoute("/notification")} />
                    <img src="./images/01.jpg" alt="c" onClick={() => handleRoute("/profile")} />


                </div> : null
            }
        </div>
    )
}

export default withRouter(Header)