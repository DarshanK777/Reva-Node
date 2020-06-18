import React from 'react'
import './btnComponent.scss'

const ButtonElement = ({ children, ...props}) =>(
        <button {...props} className="button-elem" >
            {children}
        </button>
)

export default ButtonElement
