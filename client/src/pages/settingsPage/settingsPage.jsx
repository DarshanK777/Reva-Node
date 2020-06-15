import React from 'react'
import './settingsPage.scss'
import EditDetails from './editDetails/editDetailsPage'
import EditPassword from './editPassword/editPasswordPage'
import useWindowDimensions from '../../utils/functions/width'


const SettingsPage = () =>{

    const { width } = useWindowDimensions()

    return (
        <React.Fragment>
            <div id="bg"></div>
            <main id="settings">
                {
                    width < 1024 ?
                    <React.Fragment>
                        <div className="options">
                            <span>
                                Edit Profile
                            </span>
                            <hr></hr>
                            <span>
                                Change Password
                            </span>
                        </div>
                        
                        <EditDetails/> 
                    </React.Fragment> : 
                    <div className="settings-container">
                        <EditDetails/>
                        <EditPassword/>
                    </div>
                }
            </main>
        </React.Fragment>
    )
}

export default SettingsPage