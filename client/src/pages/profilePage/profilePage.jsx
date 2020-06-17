import React from 'react'
import './profilePage.scss'
import Grid from '../../components/gridComponent/gridComponent'

const ProfilePage = () =>{

    return(
        <React.Fragment>
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
                    <Grid/>
               </section>
            </main>
        </React.Fragment>
    )
}

export default ProfilePage