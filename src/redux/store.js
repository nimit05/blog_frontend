import {createStore} from 'redux'
import pageReducer from './Page/pageReducers'

const store = createStore(pageReducer) 

export default store