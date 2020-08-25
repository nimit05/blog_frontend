import {FETCH_ARTICLES_BEGIN 
    , FETCH_ARTICLES_SUCCESS
    ,FETCH_ARTICLES_FAILS 
}from './articlesType';

const initialState = {
    loading : false,
    articles : [],
    error : null
}

const articleReducers = (state = initialState , action) => {
    switch (action.type){
        case FETCH_ARTICLES_BEGIN :
            return{
                ...state,
                loading : true,
                error : null
            }
        case FETCH_ARTICLES_SUCCESS :
            return{
                ...state ,
                loading : false,
                articles : action.payload,
            }
        case FETCH_ARTICLES_FAILS :
            return{
                ...state,
                loading : false,
                error : action.payload
            }
        default : return state
    }
}

export default articleReducers;