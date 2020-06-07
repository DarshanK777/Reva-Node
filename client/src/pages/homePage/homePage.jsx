import React from 'react'
import './homePage.scss'

const HomePage = () =>{
    return(
        <React.Fragment>
            <div id="bg"></div>

            <main>
                <section id="primary">
                    <h1>Welcome to Reva</h1>
                    <p> -The image sharing web app- </p>
                </section>
                <section id="card">
                    <h1>
                    Sign In
                    </h1>

                </section>
            </main>
        </React.Fragment>
    )
}

export default HomePage