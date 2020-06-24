import React from 'react'
import './signUpComponent.scss'
import {InputElement} from '../inputComponent/inputComponent'
import ButtonElement from '../btnComponent/btnComponent'
import useForm from '../../utils/functions/useForm'
import {validateRegister} from '../../utils/functions/validation'
import {useDispatch} from 'react-redux'
import {login} from '../../redux/actions/auth'
import {withRouter } from 'react-router-dom'

const SignUp = (props) =>{

    const dispatch = useDispatch()
    const submitToServer = () => {
        dispatch(login(
            values.username,
            values.email,
            values.password,
            values.password2
        ))
        props.history.push('/feed')
    }
    
    const {handleChange, handleSubmit, values, errors} = useForm(submitToServer, {
        username : "",
        name: "",
        email: "",
        password: "",
        password2 :""
    }, validateRegister)

    const changeCardParent =() =>{
        props.card('signIn')
    }

  

    return(
        <div className="signUp">
            <form onSubmit={handleSubmit}>
                <div className="form-input-group">
                    {
                        console.log(errors)
                    }
                    <h1>Sign Up</h1>
                    <InputElement type="text" onChange={handleChange} placeholder="username" name="username" value={values.username} error={errors.username}/>
                    <InputElement type="text" onChange={handleChange} placeholder="Name" name="name" value={values.name} error={errors.name}/>
                    <InputElement type="email" onChange={handleChange} placeholder="Email" name="email" value={values.email} error={errors.email} />
                    <InputElement type="password" onChange={handleChange} placeholder="password" name="password" value={values.password} error={errors.password}/>
                    <InputElement type="password" onChange={handleChange} placeholder="Re-enter Password" name="password2" value={values.password2} error={errors.password2}/>
                </div>
                <ButtonElement type="submit" value="submit" style={{marginTop: "1em"}}>Sign-Up</ButtonElement>
            </form>
            <p>Existing User? <span id="signUp" onClick={changeCardParent}>Sign In</span></p>
            
        </div>
    )
}

export default withRouter(SignUp)