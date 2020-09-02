const { PAGE_LINK , FEED_TYPE } = require("../Types")

const initialState = {
    page : 'home',
    feed : 'your'
}

const pageReducer = (state = initialState , action) => {
    switch(action.type){
        case  PAGE_LINK : 
        return {
            ...state,
            page : action.payload
        }
        case FEED_TYPE : 
            return {
                ...state,
                feed : action.payload
            }
        default : return state
    }
}

export default pageReducer;