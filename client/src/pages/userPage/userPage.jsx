import React, { useEffect, useState } from 'react'
import './userPage.scss'
import Grid from '../../components/gridComponent/gridComponent'
import { useSelector } from 'react-redux'
import {loadUserProfileByUID, loadProfileFeedByUID} from '../../utils/functions/apiCalls'

const UserPage = (props) =>{
    
    const [user, setUser] = useState(null)
    const [feed, setFeed] = useState(null)
    //005c1150-a489-11ea-9d93-43df8ce69cb3
    const loadFeed = async() => {
        const xfeed = await loadProfileFeedByUID(props.match.params.uid)
        setFeed(xfeed)
    }

    const loadUser = async() => {
        const xuser = await loadUserProfileByUID(props.match.params.uid)
        setUser(xuser)
    }
    useEffect(()=>{
        if(user){
            loadFeed()
        }else{
            loadUser()
        }
    },[user])

    return(
        <React.Fragment>
            {
                user ?
                <main id="profile">
                    <section id="profile-details">
                        <section id="det">
                            <img src="/images/01.jpg" alt=""/>
                            <h1>k.darshan</h1>
                            <p>darshan kadam</p>
                                <ul className="info-holder">
                                    <li>
                                        <span id="top">following</span>
                                        <span id="bottom">52</span>
                                    </li>
                                    <li>
                                        <span id="top">followers</span>
                                        <span id="bottom">12</span>
                                    </li>
                                    <li>
                                        <span id="top">posts</span>
                                        <span id="bottom">02</span>
                                    </li>
                                </ul>                            
                        </section>
                        {
                            feed ? 
                            <Grid/>:
                            <div id="loading">Loading</div>
                        }
                    </section>
                </main>:
            <div id="loading">Loading</div>
            }
        </React.Fragment>
    )
}

export default UserPage