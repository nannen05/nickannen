import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import headerData from './dataReducer'

const reducers = combineReducers({
  headerData,
  routing: routerReducer
})

export default reducers
