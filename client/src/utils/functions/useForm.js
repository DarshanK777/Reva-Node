// custom form hook

import {useState} from 'react'

const useForm = (callback, intialState ={}, validate)=>{
    const [values, setValues] = useState(intialState)

    /* eslint-disable */
    const [errors, setErrors] = useState({})

    // handle change function
    const handleChange = event =>{
        const {name, value} = event.target;
        
        setValues(values =>{
            return{
                ...values,
            [name] : value
            }
        });
        console.log(values)
    };

    //handle submit function
    const handleSubmit = event =>{
        event.preventDefault()
        console.log('submit')

        if(Object.keys(validate(values)).length === 0){
            console.log('the')
            callback()
            setValues(intialState);
        }else{
            setErrors(validate(values))
        }
    };

    return{
        handleChange,
        handleSubmit,
        values, 
        errors
    }
}

export default useForm