import { createAction, handleActions } from 'redux-actions'
import NavigationService from '../lib/NavigationService'

const initialState = {
  availableWeeks: [],
  weeksLoading: false,
  questions: [],
  questionsLoading: false,
  selectedWeekId: 0,
  answers: [],
  currentQuestion: 0,
  complete: false
}
export default handleActions({
  RESET_CLAIM_STATE: () => ({ ...initialState }),
  SET_AVAILABLE_WEEKS: (state, action) => ({ ...state, availableWeeks: action.payload }),
  SET_WEEKS_LOADING: (state, action) => ({ ...state, weeksLoading: action.payload }),
  SET_QUESTIONS: (state, action) => ({ ...state, questions: action.payload }),
  SET_QUESTIONS_LOADING: (state, action) => ({ ...state, questionsLoading: action.payload }),
  SET_SELECTED_WEEK_ID: (state, action) => ({ ...state, selectedWeekId: action.payload }),
  SET_ANSWERS: (state, action) => ({ ...state, answers: action.payload }),
  SET_CURRENT_QUESTION: (state, action) => ({ ...state, currentQuestion: action.payload }),
  SET_COMPLETE: (state, action) => ({ ...state, complete: action.payload }),
}, initialState)

export const resetClaimState = createAction('RESET_CLAIM_STATE')
export const setAvailableWeeks = createAction('SET_AVAILABLE_WEEKS')
export const setWeeksLoading = createAction('SET_WEEKS_LOADING')
export const setQuestions = createAction('SET_QUESTIONS')
export const setQuestionsLoading = createAction('SET_QUESTIONS_LOADING')
export const setSelectedWeekId = createAction('SET_SELECTED_WEEK_ID')
export const setAnswers = createAction('SET_ANSWERS')
export const setCurrentQuestion = createAction('SET_CURRENT_QUESTION')
export const setComplete = createAction('SET_COMPLETE')

// qid optional. currentQuestion is default question used
export const answerQuestion = (answer, qid) => (dispatch, getState) => {
  const { currentQuestion, questions, answers } = getState().claim
  let question = null
  if (qid == null) {
    question = questions[currentQuestion]
  } else {
    questions.every((q) => {
      if (q.id === qid) question = { ...q }
      return question == null
    })
  }
  dispatch(setAnswers([...answers, { qid: question.id, answer }]))
  if (currentQuestion <= questions.length - 2) { // Move to next question
    dispatch(setCurrentQuestion(currentQuestion + 1))
  } else {
    dispatch(setComplete(true))
  }
}

export const restartClaim = () => (dispatch) => {
  dispatch(setAnswers([]))
  dispatch(setSelectedWeekId(0))
  dispatch(setCurrentQuestion(0))
  dispatch(setComplete(false))
}

export const loadAvailableWeeks = () => (dispatch) => {
  dispatch(setAvailableWeeks([
    { id: 1, text: 'This Week' },
    { id: 2, text: 'Next Week' },
    { id: 3, text: 'Another Week' },
  ]))
}
export const loadQuestions = () => (dispatch) => {
  dispatch(setQuestions([
    { id: 1, text: 'Do you know the answer?' },
    { id: 2, text: 'What about this answer?' },
    { id: 3, text: 'Third Answer?' },
  ]))
}
