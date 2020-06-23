import {store} from '../../redux/store/store'
import axios from 'axios'
import {PORT_NO} from '../sense'

export const tokenConfig = () => {
    const state = store.getState()
    const token = state.token
    const config = {
      headers: {
        'content-Type': 'application/json',
      },
    };
  
    if (token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
};


export const loadUserProfileByUID = async (uid) =>{
    try{
        if(uid){
            const res = await axios.get(`${PORT_NO}/user/${uid}`, tokenConfig());
            return res.data
        }
        const res = await axios.get(`${PORT_NO}/user/me`, tokenConfig())
        return res.data
        
    }catch(error){
        if (error.response) {
            return {
                errors : error.response.data
            }
        } 
    }
}

export const loadFeed = async (uid) =>{
    try{
        if(uid){
            const res = await axios.get(`${PORT_NO}/user/post/${uid}`, tokenConfig());
            return res.data
        }
        const res = await axios.get(`${PORT_NO}/user/me/post`, tokenConfig())
        return res.data
        
    }catch(error){
        if (error.response) {
            return {
                errors : error.response.data
            }
        } 
    }
}
