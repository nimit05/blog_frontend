import {FETCH_ARTICLES_BEGIN , FETCH_ARTICLES_SUCCESS
    ,FETCH_ARTICLES_FAILS ,GET_ART_USER_BEGIN ,
    GET_ART_USER_FAILS , GET_ART_USER_SUCCESS
}from '../Types';

export const fetchSuccess = (data) => {
    return{
        type : FETCH_ARTICLES_SUCCESS,
        payload : data
    }
}

export const fetchBegin = () => {
    return{
        type : FETCH_ARTICLES_BEGIN,
    }
}

export const fetchFails = (error) => {
    return{
        type : FETCH_ARTICLES_FAILS,
        payload : error
    }
}

export const fetchData = () => {
    return dispatch => {
        dispatch(fetchBegin());
        return fetch('/api/articles')
        .then((res) => res.json())
        .then((data) => {
            dispatch(fetchSuccess(data));
        })
        .catch(error => dispatch(fetchFails(error)))
    }
}

export const getArtSuccess = (data) => {
    return{
        type : GET_ART_USER_SUCCESS,
        payload : data
    }
}

export const getArtBegin = () => {
    return{
        type : GET_ART_USER_BEGIN,
    }
}

export const getArtFails = (error) => {
    return{
        type : GET_ART_USER_FAILS,
        payload : error
    }
}

export const getArticles = (username) => {
    return dispatch => {
        dispatch(getArtBegin());
        return fetch(`/api/profile/myarticles?username=${username}`)
        .then((res) => res.json())
        .then((data) => {
            if(data){
            dispatch(getArtSuccess(data));
            }
        })
        .catch(error => dispatch(getArtFails(error)))
    }
}