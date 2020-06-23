import React from 'react'
import './loaderComponent.scss'

const Loader = WrapperComponent => ({isLoading, ...props}) =>{
    return isLoading ?
    <div>
        Loading
    </div>:
    <WrapperComponent {...props} />
}

export default Loader