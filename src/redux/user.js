import { createAction, handleActions } from 'redux-actions'

const initialState = {
  username: '',
}
export default handleActions({
  SET_USERNAME: (state, action) => ({ ...state, username: action.payload }),
}, initialState)

export const setUsername = createAction('SET_USERNAME')
