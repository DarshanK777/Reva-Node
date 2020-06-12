import React from 'react'
import './gridItemComponent.scss'

const GridItem = ({value}) =>{
    console.log(value)
    return(
       <React.Fragment>
            <div className="item">
            <img src={value.image} className="grid-image" alt="" />
            <div className="item-details">
                <span id="details">
                    <img src="/images/01.jpg" alt=""/>
                    <h1>
                        k.darshan
                    </h1>
                </span>
                <span id="actions">

                </span>
        
            </div>
            <hr></hr>
        </div>
        
       </React.Fragment>
    )
}

export default GridItem