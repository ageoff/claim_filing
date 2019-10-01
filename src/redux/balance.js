import { createAction, handleActions } from 'redux-actions'
import moment from 'moment'

const initialState = {
  balance: 0,
  loading: true,
  lastUpdated: '',
}
export default handleActions({
  RESET_BALANCE_STATE: () => ({ ...initialState }),
  SET_BALANCE: (state, action) => ({ ...state, balance: action.payload }),
  SET_LOADING: (state, action) => ({ ...state, loading: action.payload }),
  SET_LAST_UPDATED: (state, action) => ({ ...state, lastUpdated: action.payload }),
}, initialState)

export const setBalance = createAction('SET_BALANCE')
export const setLoading = createAction('SET_LOADING')
export const setLastUpdated = createAction('SET_LAST_UPDATED')

export const loadBalance = () => (dispatch) => {
  dispatch(setBalance(1230))
  dispatch(setLastUpdated(moment().format('MM/DD/YYYY hh:mm:ss a')))
  dispatch(setLoading(false))
}
