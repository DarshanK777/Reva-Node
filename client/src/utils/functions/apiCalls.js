import {store} from '../../redux/store/store'
import axios from 'axios'
import {PORT_NO} from '../sense'

export const tokenConfig = () => {
    const state = store.getState()
    const token = state.user.token
    const config = {
      headers: {
        'content-Type': 'application/json',
      },
    };
  
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
};

export const loadProfileFeed = async () =>{
    try{
        const res = await axios.get(`${PORT_NO}/user/me/post`, tokenConfig())
        return res.data
    }catch(error){
        if(error.response){
            return{
                errors: error.response.data
            }
        }
    }
}

export const loadUserProfileByUID = async (uid) =>{
    try{
        const res = await axios.get(`${PORT_NO}/user/${uid}`, tokenConfig());
        return res.data
        
    }catch(error){
        if (error.response) {
            return {
                errors : error.response.data
            }
        } 
    }
}

export const loadProfileFeedByUID = async (uid) =>{
    try{
        const res = await axios.get(`${PORT_NO}/user/post/${uid}`, tokenConfig());
        return res.data
        
    }catch(error){
        if (error.response) {
            return {
                errors : error.response.data
            }
        } 
    }
}

