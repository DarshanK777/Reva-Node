import React, { useEffect, useState } from 'react'
import './profilePage.scss'
import Grid from '../../components/gridComponent/gridComponent'
import { useSelector } from 'react-redux'
import { loadUserProfileByUsername, loadProfileFeedByUID, followUser } from '../../utils/functions/apiCalls'
import { Redirect } from 'react-router-dom'

const ProfilePage = (props) =>{
    
    const state = useSelector(state => state.user) // global user (logged in)
    const [user, setUser] = useState(null) // profile user
    const [feed, setFeed] = useState(null) // profile user posts
    const username = props.match.params.username // profile user's username

    const loadFeed = async() => { // load feed
        const xfeed = await loadProfileFeedByUID(user._id)  
        setFeed(xfeed)
    }

    const loadUser = async() => { // load user
        if (username === undefined){ // if username is not given
            if(state.isAuthenticated){ 
                const xuser = await loadUserProfileByUsername(state.user.username)
                setUser(xuser)
            }else{
                return <Redirect to="/" />
            }
        }else{ // if username is given
            const xuser = await loadUserProfileByUsername(username)
            setUser(xuser)
        }
    }

    const handleFollowClick = async() =>{
        const res = await followUser(user._id)
        if(res.status !== 'deleted'){
            setUser(prev =>{
                return{
                    ...prev,
                    following : true
            }})
        }else{
            setUser(prev =>{
            return{
                ...prev,
                following : false
            }})
        }
    }

    useEffect(()=>{
        if(user){
            loadFeed()// init feed
        }else{
            loadUser()// init user
        }
    // eslint-disable-next-line
    }, [user])

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
                                {
                                    user._id === state.user._id ?
                                    null: user.following ?
                                    <div id="unsub-btn" onClick={handleFollowClick}> Unfollow </div> :
                                    <div id="sub-btn" onClick={handleFollowClick}>Follow</div>
                                }                            
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