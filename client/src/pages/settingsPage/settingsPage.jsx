import React from 'react'
import './settingsPage.scss'
import EditDetails from './editDetails/editDetailsPage'
import EditPassword from './editPassword/editPasswordPage'
import useWindowDimensions from '../../utils/functions/width'
import OptionsPage from './optionsPage/optionsPage'
import { useState } from 'react'


const SettingsPage = () =>{

    const { width } = useWindowDimensions()

    const [option, setOption] = useState(0)
    const handleOptions = ( data ) =>{
        setOption(data)
    }

    return (
        <React.Fragment>
            <div id="bg"></div>
            <main id="settings">
                {
                    width < 1025 ?
                    <React.Fragment>
                        <div className="options">
                            <span onClick={() => handleOptions(0)}>
                                Edit Profile
                            </span>
                            <hr></hr>
                            <span onClick={() =>handleOptions(1)}>
                                Change Password
                            </span>
                        </div>
                        {
                            option === 0 ?
                            <EditDetails/>:
                            <EditPassword/>
                        }
                    </React.Fragment> : 
                    <div className="settings-container">
                        <div id="header">
                            <p>Settings</p>
                        </div>
                        <hr></hr>
                        <div id="content">
                            <span id="options">
                                <OptionsPage handler={handleOptions}/>
                            </span>
                            <span id="option-page">
                               {
                                   option === 0 ?
                                   <EditDetails/>:
                                   <EditPassword/>
                               }
                            </span>
                        </div>
                    </div>
                }
            </main>
        </React.Fragment>
    )
}

export default SettingsPage