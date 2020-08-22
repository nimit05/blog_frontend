const { PAGE_LINK } = require("./pageType")

const initialState = {
    page : 'home'
}

const pageReducer = (state = initialState , action) => {
    switch(action.type){
        case  PAGE_LINK : 
        return {
            ...state,
            page : action.payload
        }
        default : return state
    }
}

export default pageReducer;