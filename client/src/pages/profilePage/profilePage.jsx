import React, { useEffect } from 'react'
import './profilePage.scss'
import Grid from '../../components/gridComponent/gridComponent'
// import { useDispatch } from 'react-redux'
import {loadUserProfileByUID, loadFeed} from '../../utils/functions/apiCalls'

const ProfilePage = (props) =>{

    // temp way for current user.. else looking for using the redux user state

    let user, feed = null
    let loading, feedLoading = true

    const loadUser = async(uid) =>{
        user = await loadUserProfileByUID(uid) 
    }

    const loadFeeds = async(uid) => {
        feed = await loadFeed(uid)
    }

    useEffect(()=>{
        if(user){
            loading = false
            loadFeeds(props.match.params.uid)
            feedLoading = false
        }else{
            props.match.params.uid ?
            loadUser(props.match.params.uid):
            loadUser(null)
        }

    }, [user, feedLoading])


    return(
        <React.Fragment>
            {
                loading ? 
                <div>Loading</div> :
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
                               feedLoading ? 
                               <div> Loading </div> :
                                <Grid/>
                           }
                    </section>
                </main>
            }
        </React.Fragment>
    )
}

export default ProfilePage