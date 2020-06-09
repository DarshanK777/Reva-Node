import React from 'react'
import './signInComponent.scss'
import {InputElement} from '../inputComponent/inputComponent'
import ButtonElement from '../btnComponent/btnComponent'
import useForm from '../../utils/functions/useForm'

const SignIn = () =>{
    const {handleChange, handleSubmit, values} = useForm( {email : "", password: ""})

    return(
        <div className="signIn">
            
            <form onSubmit={handleSubmit}>
               <div className="form-input-group">
               <h1>Sign In</h1>
                <InputElement type="text" onChange={handleChange} placeholder="Email" name="email" value={values.email} />
                <InputElement type="password" onChange={handleChange} placeholder="Password" name="password"  value={values.password} />
               </div>
                <ButtonElement type="button" value="submit" >Sign-In</ButtonElement>
            </form>
        </div>
    )
}

export default SignIn