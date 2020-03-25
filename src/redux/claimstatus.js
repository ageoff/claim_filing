import { createAction, handleActions } from 'redux-actions'

const initialState = {
  claims: [],
  selectedClaim: null,
  loading: true,
}
export default handleActions({
  RESET_CLAIM_STATUS_STATE: () => ({ ...initialState }),
  SET_CLAIMS: (state, action) => ({ ...state, claims: action.payload }),
  SET_SELECTED_CLAIM: (state, action) => ({ ...state, selectedClaim: action.payload }),
  SET_LOADING: (state, action) => ({ ...state, loading: action.payload }),
}, initialState)

export const setClaims = createAction('SET_CLAIMS')
export const setSelectedClaim = createAction('SET_SELECTED_CLAIM')
export const setLoading = createAction('SET_LOADING')

export const loadClaimStatus = () => (dispatch) => {
  dispatch(setClaims([
    { id: 1, claim_week: '01/01/2019', status: 'Submitted' },
    { id: 2, claim_week: '01/07/2019', status: 'Rejected' },
    { id: 3, claim_week: '01/14/2019', status: 'Under Review' },
    { id: 4, claim_week: '01/21/2019', status: 'Completed' },
  ]))
  dispatch(setLoading(false))
}
