import {POST_ARTICLES_BEGIN 
    ,POST_ARTICLES_SUCCESS , POST_ARTICLES_FAILS} from '../Types'

const initialstate = {
    loading : false,
    posted : false,
    error : ''
}

export const Post_ArtReducers = (state = initialstate , action) => {
    switch (action.type){
        case POST_ARTICLES_BEGIN : 
            return{
                ...state,
                loading : true
            }
        case POST_ARTICLES_FAILS : 
        return{
            ...state,
            loading : false,
            error : action.payload
        }
        case POST_ARTICLES_SUCCESS : 
        return{
            ...state,
            loading : false,
            posted : true
        }
        default : 
        return state
    }
}

