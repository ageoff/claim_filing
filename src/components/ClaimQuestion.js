import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { answerQuestion } from '../redux/claim'
import { headers, colors } from '../assets/Styles'

const ClaimQuestion = ({ question, questionIndex, onAnswer }) => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
    <View>
      <Text style={headers.questionLabel}>{`Question #${questionIndex + 1}:`}</Text>
      <Text style={headers.questionText}>{question.text}</Text>
    </View>
    <View style={{ flexDirection: 'row' }}>
      <Button containerStyle={{ flex: 1 }} buttonStyle={{ backgroundColor: colors.mainBlue, padding: 10, marginRight: 2.5 }} title="Yes" onPress={() => onAnswer(true)} />
      <Button containerStyle={{ flex: 1 }} buttonStyle={{ backgroundColor: colors.backgroundGrey, padding: 10, marginLeft: 2.5 }} title="No" onPress={() => onAnswer(false)} />
    </View>
  </View>
)

ClaimQuestion.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  questionIndex: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  question: state.claim.questions[state.claim.currentQuestion],
  questionIndex: state.claim.currentQuestion,
})
const mapDispatchToProps = (dispatch) => ({
  onAnswer: (answer, qid) => dispatch(answerQuestion(answer, qid)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ClaimQuestion)
