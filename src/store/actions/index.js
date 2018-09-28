import { DATAHEADER, DATAFORMPOSTS } from '../../firebase'
import { FETCH_HEADER } from './types'

export const fetchHeader = () => async dispatch => {
  console.log('fired')
  DATAHEADER.on('value', snapshot => {
    console.log(snapshot.val())
    dispatch({
      type: FETCH_HEADER,
      payload: snapshot.val()
    })
  })
}

export const postFormData = formData => {
  DATAFORMPOSTS.push({
    formData
  })
}
