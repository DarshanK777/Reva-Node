import {USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_SUCCESS,
    // STALK_LOADING, POST_SUCCESS, 
} from '../actions/actionTypes'

const intialState = {
    token : localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    errors: null,
};

export default function(state = intialState, action){
    switch(action.type){
        case USER_LOADING:
            return{
                ...state, 
                isLoading: true,
            }

        case USER_LOADED:
            return{
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload,
            }

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem("token", action.payload.token)  
            return{
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                isAuthenticated: true,
                isLoading: false,
                errors: null
            }

        case AUTH_ERROR:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem("token")
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
                isLoading: false,
                errors: action.payload
            }
        
        // case STALK_LOADING:
        //     return{
        //         ...state,
        //     }
        
        // case POST_SUCCESS:
        //     return{
        //         ...state,
        //         post_updated: true
        //     }

        default:
            return state
    }
}
