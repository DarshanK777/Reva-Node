import React from 'react'
import './editPasswordPage.scss'
import {InputElement} from '../../../components/inputComponent/inputComponent'
import useForm from '../../../utils/functions/useForm'
import ButtonElement from '../../../components/btnComponent/btnComponent'
import {editPasswordValidation} from '../../../utils/functions/validation'

const EditPassword = () =>{

    const submitToServer = () => {
        console.log('this is called')
        // api call
    }

    const {handleChange, handleSubmit, values} = useForm(submitToServer, {
        password: "",
        password1: "",
        password2: ""
    }, editPasswordValidation)

    

    return(
        <div className="edit-password-container">
            {/* <h1>Change Password</h1> */}
            <form onSubmit={handleSubmit}>
                <div className="form-input-group">
                <InputElement type="password" onChange={handleChange} placeholder="current password" name="password" value={values.password} />
                <InputElement type="password" onChange={handleChange} placeholder="new password" name="password1" value={values.password1} />
                <InputElement type="password" onChange={handleChange} placeholder="Re-enter Password" name="password2" value={values.password2} />
                </div>
                <ButtonElement type="button" value="submit" >Save Password</ButtonElement>
            </form>
        </div>
    )
}

export default EditPassword