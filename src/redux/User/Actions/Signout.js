import {FETCH_SIGNOUT_SUCCESS} from '../userType'

 import {loginBegin , loginFail} from './userAction'

export const outSuccess = () => {
    return{
        type : FETCH_SIGNOUT_SUCCESS,
    }
}


export const SignOut = () => {
    return dispatch => {
        dispatch(loginBegin())
        return fetch('/api/login' , {
            method : "DELETE",
            headers: {
                "Content-Type": "application/json"
            }})
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if(data.error){
                    dispatch(loginFail())
                }
                else if(data){
                    dispatch(outSuccess());
                }
        }).catch((err) => dispatch(loginFail(err)));
    }
}