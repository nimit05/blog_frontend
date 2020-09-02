import {
FETCH_LOGIN_BEGIN , FETCH_LOGIN_FAILS , FETCH_LOGIN_SUCCESS  ,FETCH_SIGNOUT_SUCCESS} from '../Types'

const initialStateLogin = {
    loading : false,
    loggedin : false,
    error : '',
    username : null
}

const LoginReducers = (state = initialStateLogin , action) => {
    switch (action.type){
        case FETCH_LOGIN_BEGIN : 
        return{
            ...state,
            loading : true
        }
        case FETCH_LOGIN_SUCCESS : 
        return{
            ...state,
            loading : false,
            loggedin : true,
            username : action.payload
        }
        case FETCH_LOGIN_FAILS : 
        return{
            ...state , 
            loading : false,
            error : action.payload
        }
        case FETCH_SIGNOUT_SUCCESS :
            return{
                ...state,
                loggedin : false,
                loading : false
            }
        default :
        return state
    }
}

export default LoginReducers