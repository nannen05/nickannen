import { FETCH_HEADER } from '../actions/types'

const headerData = (state = {}, action) => {
  switch (action.type) {
    case FETCH_HEADER:
      return action.payload
    default:
      return state
  }
}

export default headerData
