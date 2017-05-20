// import * as ActionTypes from '../actions'
// import merge from 'lodash/merge'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import { postsReducer } from './posts'


const rootReducer = combineReducers({
  postsReducer, 
  routing
})

export default rootReducer
