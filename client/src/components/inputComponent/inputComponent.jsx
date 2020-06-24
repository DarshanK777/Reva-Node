import React from 'react'
import './inputComponent.scss'

export const InputElement = ({error, onChange, ...props}) =>(
        <div className="group">
            <input className="form-input" onChange={onChange} {...props}/> 
            {
                error? 
                <span id="error-msg"> {error} </span> : 
                null 
            }
        </div>
)
