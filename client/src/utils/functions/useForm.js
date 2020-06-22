// custom form hook

import {useState} from 'react'

const useForm = (callback, intialState ={}, validate)=>{
    const [values, setValues] = useState(intialState)
    const [errors, setErrors] = useState({})

    console.log(errors)

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
        event.prevenDefault()

        if(Object.keys(validate(values)).length === 0){
            callback()
            setValues(intialState);
        }else{
            setErrors(validate(values))
        }

        callback()
    };

    return{
        handleChange,
        handleSubmit,
        values
    }
}

export default useForm