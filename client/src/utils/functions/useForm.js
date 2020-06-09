// custom form hook

import {useState} from 'react'

const useForm = (intialState ={})=>{
    const [values, setValues] = useState(intialState)
    // const [errors, setErrors] = useState({})

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

    const handleSubmit = event =>{
        event.prevenDefault()
        // callback()
    };

    return{
        handleChange,
        handleSubmit,
        values
    }
}

export default useForm