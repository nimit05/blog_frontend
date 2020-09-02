import pageReducer from './Reducers/pageReducers'
import {articleReducers , getArtReducers} from './Reducers/articleReducer'
import {combineReducers} from 'redux'
import SignupReducers  from './Reducers/signupReducers';
import LoginReducers from './Reducers/loginReducers';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import {Post_ArtReducers} from './Reducers/post_articleReducers'

 const rootReducer = combineReducers({
    page : pageReducer,
    articles : articleReducers,
    signup : SignupReducers,
    login : LoginReducers,
    MyArticles : getArtReducers,
    PostArticle : Post_ArtReducers
})

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['login']
}

export default persistReducer(persistConfig , rootReducer);