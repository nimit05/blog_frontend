import pageReducer from './Page/pageReducers'
import articleReducers from './Articles/articleReducer'
import {combineReducers} from 'redux'
import SignupReducers  from './User/Reducers/signupReducers';
import LoginReducers from './User/Reducers/loginReducers';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

 const rootReducer = combineReducers({
    page : pageReducer,
    article : articleReducers,
    signup : SignupReducers,
    login : LoginReducers
})

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['login']
}

export default persistReducer(persistConfig , rootReducer);