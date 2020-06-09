import React from 'react'
import './homePage.scss'
// import SignIn from '../../components/signInComponent/signInComponent'
import SignUp from '../../components/signUpComponent/signUpComponent'

const HomePage = () =>{
    // const signUp = true
    return(
        <React.Fragment>
            <div id="bg"></div>

            <main>
                <section id="primary">
                    <h1>Welcome to Reva</h1>
                    <p> -The image sharing web app- </p>
                </section>
                <section id="card">
                    {/* <SignIn/> */}
                    <SignUp/>
                </section>
            </main>
        </React.Fragment>
    )
}

export default HomePage