import {FETCH_ARTICLES_BEGIN , FETCH_ARTICLES_SUCCESS
    ,FETCH_ARTICLES_FAILS  ,GET_ART_USER_BEGIN ,
    GET_ART_USER_FAILS , GET_ART_USER_SUCCESS 
}from '../Types';

const initialState = {
    loading : false,
    articles : [],
    error : null
}

export const articleReducers = (state = initialState , action) => {
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

    const initialStateArt = {
        loading : false,
        articles : [],
        error : ''
    }

export  const getArtReducers = (state = initialStateArt , action) => {
    switch (action.type){
        case GET_ART_USER_BEGIN :
            return{
                ...state,
                loading : true
            }
        case GET_ART_USER_SUCCESS :
            return{
                ...state,
                loading : false,
                articles : action.payload
            }
        case GET_ART_USER_FAILS :
            return{
                ...state,
                loading : false,
                error : action.payload
            }
         default : return state

    }
}

export default articleReducers