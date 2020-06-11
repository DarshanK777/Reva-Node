import React from 'react'
import './gridComponent.scss'
import GridItem from  '../gridComponent/gridItemComponent/gridItemComponent'
import {list} from '../../test-data/listData'

const Grid = () =>{
    return(
        <div className="grid-container">
            {/* <span> </span> */}
            {
                list.map((item, index)=>{
                    return(
                        <GridItem key={index} value={item}/>
                    )
                })
            }
        </div>
    )
}

export default Grid