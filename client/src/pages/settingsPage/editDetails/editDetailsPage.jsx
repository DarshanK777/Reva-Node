import React from 'react'
import './editDetailsPage.scss'
import {InputElement} from '../../../components/inputComponent/inputComponent'
import useForm from '../../../utils/functions/useForm'
import ButtonElement from '../../../components/btnComponent/btnComponent'

const EditDetails = () =>{

    const {handleChange, handleSubmit, values} = useForm({
        username : "",
        name: "",
        quote: "",
    })
    return(
        <div className="edit-details-container">
            {/* <h1>Edit Profile</h1> */}
            <form onSubmit={handleSubmit}>
                <div className="form-input-group">
                    <InputElement type="text" onChange={handleChange} placeholder="username" name="username" value={values.username}/>
                    <InputElement type="text" onChange={handleChange} placeholder="Name" name="name" value={values.name} />
                    <InputElement type="text" onChange={handleChange} placeholder="Quote" name="quote" value={values.quote} />
                </div>
                <ButtonElement type="button" value="submit" >Save Changes</ButtonElement>
            </form>
        </div>
    )
}

export default EditDetails