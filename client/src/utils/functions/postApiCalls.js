import {store} from '../../redux/store/store'
import axios from 'axios'
import {PORT_NO} from '../sense'

export const tokenConfig = () => {
    
    const state = store.getState()
    const token = state.user.token
  
    const config = {
      headers: {
        'content-Type': 'multipart/form-data',
      },
    };
  
    
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  
    return config;
  };

  
export const postImage = async (image, caption) =>{
    try{
        let formData = new FormData()
        formData.append('postImage', image)
        formData.append('caption', caption)

        const post = await axios.post(`${PORT_NO}/post/`, formData, tokenConfig())
        return post.data.status

    }catch(error){
        if(error.response){
            return{
                errors : error.response.data
            }
        }
    }
}