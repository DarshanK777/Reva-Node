const intialState = {
    token : localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    errors: null,
};

export default function(state = intialState, action){

}