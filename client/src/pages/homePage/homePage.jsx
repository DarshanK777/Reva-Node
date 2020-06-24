import React, {useState} from 'react'
import './homePage.scss'
import SignIn from '../../components/signInComponent/signInComponent'
import SignUp from '../../components/signUpComponent/signUpComponent'
import {useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'



const HomePage = (props) =>{

    const {isAuthenticated} = useSelector(state => state)
    const { prevLocation } = props.location
    const [card, setCard] = useState('signIn')

    const changeCard = (data) =>{
        setCard(data)
    }
    
    return(
        <React.Fragment>
            {
                isAuthenticated ? 
                    prevLocation && prevLocation.from ?
                        <Redirect to={prevLocation.from}/>:
                        <Redirect to="/feed"/>:
                        <main>
                            <section id="primary">
                                <h1>Welcome to Reva</h1>
                                <p> -The image sharing web app- </p>
                            </section>
                            {
                                console.log(card)
                            }
                            <section id="card">
                                {
                                    card === "signIn" ?
                                        <SignIn card={changeCard}/> :
                                        <SignUp card={changeCard}/>
                                    }
                                }

                            </section>
                        </main>
            }
        </React.Fragment>
    )
}

export default HomePage