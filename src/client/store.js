import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import initialState from './reducers/initialState'

const logger = store => next => (action) => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

// let createStoreWithMiddleware = applyMiddleware(logger)(createStore)

// let yourApp = combineReducers(reducers)
// let store = createStoreWithMiddleware(yourApp)

export default applyMiddleware(logger, thunk)(createStore)(rootReducer, initialState)
