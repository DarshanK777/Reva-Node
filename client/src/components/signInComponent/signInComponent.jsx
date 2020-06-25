import React from 'react'
import './signInComponent.scss'
import {InputElement} from '../inputComponent/inputComponent'
import ButtonElement from '../btnComponent/btnComponent'
import useForm from '../../utils/functions/useForm'
import {validateLogin} from '../../utils/functions/validation'
import {withRouter} from 'react-router-dom'
import {login} from '../../redux/actions/auth'
import { useDispatch } from 'react-redux'

const SignIn = (props) =>{

    const dispatch = useDispatch()

    const submitToServer =  () => {
        console.log(values)
        dispatch(login(
            values.email,
            values.password
        ))
        props.history.push('/feed')
    }

    const changeCardParent =() =>{
        props.card('signUp')
    }

    const {handleChange, handleSubmit, values, errors} = useForm(submitToServer, {email : "", password: ""}, validateLogin )

    return(
        <div className="signIn">
            <form onSubmit={handleSubmit}>
               <div className="form-input-group">
               <h1>Sign In</h1>
                <InputElement type="text" onChange={handleChange} placeholder="Email" name="email" value={values.email} error={errors.email} />
                <InputElement type="password" onChange={handleChange} placeholder="Password" name="password"  value={values.password} error={errors.password} />
               </div>
                <ButtonElement type="submit" value="submit">Sign-In</ButtonElement>
               
            </form>
            <p>New User? <span id="signIn" onClick={changeCardParent}>Sign Up</span></p>
            
        </div>
    )
}

export default withRouter(SignIn)