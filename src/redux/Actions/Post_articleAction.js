import {POST_ARTICLES_BEGIN 
 ,POST_ARTICLES_SUCCESS , POST_ARTICLES_FAILS} from '../Types'

 import {getArtSuccess} from './articleAction'

export const postbegin = () => {
    return{
        type : POST_ARTICLES_BEGIN
    }
}

export const postSuccess = () => {
    return{
        type : POST_ARTICLES_SUCCESS
    }
}

export const postFails = (error) => {
    return{
        type : POST_ARTICLES_FAILS,
        payload : error
    }
}

export const PostArticle = (data) => {
    return dispatch => {
        dispatch(postbegin());
        return fetch('/api/articles' , {
            method : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
        .then((data) => {
            if(data.error){
                dispatch(postFails(data.error))
            }
            if(data){
                dispatch(postSuccess(data.username));
                dispatch(getArtSuccess());
            }
        }).catch((err) => dispatch(postFails(err)));
    }
}