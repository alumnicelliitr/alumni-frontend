import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import initialState from './reducers/initialState'

export default applyMiddleware(thunk)(createStore)(rootReducer, initialState)
