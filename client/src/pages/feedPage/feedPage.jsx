import React from 'react'
import './feedPage.scss'
import Grid from '../../components/gridComponent/gridComponent'

const FeedPage  = () =>{
    return(
        <React.Fragment>
            <div id="bg"></div>
            <main id="feed">
                <Grid/>
            </main>
        </React.Fragment>
    )
}

export default FeedPage