import { createAction, handleActions } from 'redux-actions'
import NavigationService from '../lib/NavigationService'
import { loadAvailableWeeks, loadQuestions } from './claim'

const initialState = {
  username: '',
  loginLoading: false,
  loginStatus: '',
  loggedIn: false,
}
export default handleActions({
  RESET_USER_STATE: () => ({ ...initialState }),
  SET_USERNAME: (state, action) => ({ ...state, username: action.payload }),
  SET_LOGIN_LOADING: (state, action) => ({ ...state, loginLoading: action.payload }),
  SET_LOGIN_STATUS: (state, action) => ({ ...state, loginStatus: action.payload }),
  SET_LOGGED_IN: (state, action) => ({ ...state, loggedIn: action.payload }),
}, initialState)

export const resetUserState = createAction('RESET_USER_STATE')
export const setUsername = createAction('SET_USERNAME')
export const setLoginLoading = createAction('SET_LOGIN_LOADING')
export const setLoginStatus = createAction('SET_LOGIN_STATUS')
export const setLoggedIn = createAction('SET_LOGGED_IN')
export const login = (email, password) => (dispatch) => {
  if (email === 'adam' && password === 'password') {
    dispatch(setUsername(email))
    dispatch(setLoginStatus(''))
    dispatch(setLoggedIn(true))
    dispatch(loadAvailableWeeks())
    dispatch(loadQuestions())
    NavigationService.replace('Home')
  } else {
    dispatch(setLoginStatus('Bad username and password'))
  }
}
export const logout = () => (dispatch) => {
  dispatch(resetUserState())
  NavigationService.replace('Login')
}
