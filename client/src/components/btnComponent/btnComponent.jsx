import React from 'react'
import './btnComponent.scss'

const ButtonElement = ({ children, ...props}) =>(
        <div className="button-elem">
            {children}
        </div>
)

export default ButtonElement
