import React from 'react'
import './notificationPage.scss'

const NotificationPage = () =>{
    return(
        <main id="notification-container">
                <p>NotificationPage</p>
                <hr></hr>
            <section id="notification-list">
                <div className="notification">
                    <span id="notification-user-data">
                        <img src="./images/05.jpg" alt=""/>
                        <p>
                           k.dasjan has liked your photo 
                        </p>
                    </span>

                    <span id="notification-time">
                        12hr ago
                    </span>
                </div>
                <hr></hr>
            </section>
        </main>
    )
}

export default NotificationPage