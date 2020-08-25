import {FETCH_ARTICLES_BEGIN 
    , FETCH_ARTICLES_SUCCESS
    ,FETCH_ARTICLES_FAILS 
}from './articlesType';

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