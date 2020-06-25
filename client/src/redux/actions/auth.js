import axios from 'axios'
import{
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
} from './actionTypes'
import {PORT_NO} from '../../utils/sense.jsx'
// import user from '../reducers/user';


// LOAD TOKEN FUNCTION
export const tokenConfig = (getState) => {
    
    const token = getState().user.token;
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  
    return config;
  };


// lOAD USER
export const loadUser = () => (dispatch, getState) =>{
    dispatch({ type: USER_LOADING});

    axios.get(`${PORT_NO}/user/me`, tokenConfig(getState))
    .then(res =>{
        dispatch({
            type: USER_LOADED,
            payload: res.data
    });
    }).catch(err=>{
        console.log(err)
        dispatch({
            type: AUTH_ERROR,
        })
    })
}


// LOGIN
export const login = (email, password) => (dispatch) =>{
    
    const config = {
        header:{
            'Content-Type' : 'application/json'
        }
    }

    axios.post(`${PORT_NO}/auth/login/`, {
        email,
        password,
    }, config)
    .then(res =>{
        console.log(res)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
    });
    dispatch(loadUser())
    }).catch(error=>{
        if (error.response) {
            console.log('01',error.response.data); 
            dispatch({
                type: LOGIN_FAIL,
                payload: error.response.data
            })
        } else if (error.request) {
            dispatch({ type: LOGIN_FAIL, })
            console.log( '02 ', error.request);
        } else {
            dispatch({ type: LOGIN_FAIL, })
            console.log('Error', error.message);
        }
    })
}


// REGISTER
export const register = (username,email, password1, password2) => (dispatch) =>{
    
    const config = {
        header:{
            'Content-Type' : 'application/json'
        }
    }

    axios.post(`${PORT_NO}/auth/register/`, {
        username,
        email,
        password1,
        password2
    }, config)
    .then(res =>{
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
    });
    dispatch(loadUser())
    }).catch(error=>{
        if (error.response) {
            console.log(error.response.data);
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.data
            })
        } else if (error.request) {
            dispatch({ type: REGISTER_FAIL, })
            console.log(error.request);
        } else {
            dispatch({ type: REGISTER_FAIL, })
            console.log('Error', error.message);
        }
        
    })
}

// LOGOUT
export const logout = () => (dispatch, getState) =>{
    console.log('called logout')
    axios
    .post(`${PORT_NO}/users/logout`, null, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
}

