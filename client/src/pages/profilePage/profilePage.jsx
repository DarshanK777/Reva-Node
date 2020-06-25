import React, { useEffect, useState } from 'react'
import './profilePage.scss'
import Grid from '../../components/gridComponent/gridComponent'
import { useSelector } from 'react-redux'
import { loadProfileFeed} from '../../utils/functions/apiCalls'

const ProfilePage = () =>{
    
    const { user } = useSelector(state => state)
    const [feed, setFeed] = useState(null)

    const loadFeed = async() => {
        const xfeed = await loadProfileFeed()
        setFeed(xfeed)
    }

    useEffect(()=>{
        if(user){
            console.log('once')
            loadFeed()
        }
    }, [])

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

export default ProfilePage