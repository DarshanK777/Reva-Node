
export const validateLogin = (values) =>{
    let errors = {};
    console.log('validate')

    if (!values.email) {
        errors.email="Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 10) {
        errors.password = "Password needs to be more than 10 characters";
    }
    console.log(errors)
    return errors;
}

export const validateRegister = (values) =>{
    let errors = {};

    
    if (!values.email) {
        errors.email="Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }
    if (!values.password) {
        errors.password = "Password is required";
    } else if(values.password !== values.password2){
        errors.password2 = "Both password doesnt match"
    }
    if(!values.name){
        errors.name="Name is required"
    }
    
    // } else if (values.password.length < 10) {
    //     errors.password = "Password needs to be more than 10 characters";
    // }
    return errors;
}

export const editPasswordValidation = (values) =>{
    let errors = {};

    if (!values.password) {
        errors.password = "Password is required";
    } else if(values.password !== values.password2){
        errors.password2 = "Both password doesnt match"
    }
}