import { createAction, handleActions } from 'redux-actions'
import Agent from '../lib/Agent'

const initialState = {
  availableWeeks: [],
  weeksLoading: false,
  questions: [],
  questionsLoading: false,
  selectedWeekId: 0,
  answers: [],
  currentQuestion: 0,
  complete: false,
  acceptedWarning: false,
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
  SET_ACCEPTED_WARNING: (state, action) => ({ ...state, acceptedWarning: action.payload }),
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
export const setAcceptedWarning = createAction('SET_ACCEPTED_WARNING')

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
  dispatch(setAcceptedWarning(false))
  dispatch(setComplete(false))
}

export const loadClaimMeta = () => (dispatch) => {
  Agent.loadClaimMeta().then((result) => {
    if (result.ok && result.data) {
      console.log(result)
      dispatch(setQuestions(result.data.questions))
      dispatch(setAvailableWeeks(result.data.weeks))
    }
    else {
      console.log(result)
    }
  })
}
