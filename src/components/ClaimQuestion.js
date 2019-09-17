import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { answerQuestion } from '../redux/claim'

const ClaimQuestion = ({ question, onAnswer }) => (
  <View>
    <Text>{question.text}</Text>
    <Button title="Yes" onPress={() => onAnswer(true)} />
    <Button title="No" onPress={() => onAnswer(false)} />
  </View>
)

ClaimQuestion.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  question: state.claim.questions[state.claim.currentQuestion],
})
const mapDispatchToProps = (dispatch) => ({
  onAnswer: (answer, qid) => dispatch(answerQuestion(answer, qid)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ClaimQuestion)
