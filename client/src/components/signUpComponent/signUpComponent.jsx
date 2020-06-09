import React from 'react'
import './signUpComponent.scss'
import {InputElement} from '../inputComponent/inputComponent'
import ButtonElement from '../btnComponent/btnComponent'
import useForm from '../../utils/functions/useForm'

const SignUp = () =>{
    const {handleChange, handleSubmit, values} = useForm({
        username : "",
        name: "",
        email: "",
        password: "",
        password2 :""
    })

    return(
        <div className="signUp">
            <form onSubmit={handleSubmit}>
                <div className="form-input-group">
                    <h1>Sign Up</h1>
                    <InputElement type="text" onChange={handleChange} placeholder="username" name="username" value={values.username}/>
                    <InputElement type="text" onChange={handleChange} placeholder="Name" name="name" value={values.name} />
                    <InputElement type="email" onChange={handleChange} placeholder="Email" name="email" value={values.email} />
                    <InputElement type="password" onChange={handleChange} placeholder="password" name="password" value={values.password} />
                    <InputElement type="password" onChange={handleChange} placeholder="Re-enter Password" name="password2" value={values.password2} />
                </div>
                <ButtonElement type="button" value="submit" >Sign-Up</ButtonElement>
            </form>
            
        </div>
    )
}

export default SignUp