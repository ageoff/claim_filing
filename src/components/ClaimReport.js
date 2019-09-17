import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { restartClaim } from '../redux/claim'
import { getSelectedWeekText } from '../selectors/claim'

const ClaimReport = ({
  questions, answers, selectedWeekText, onDone,
}) => (
  <View>
    <Text>{`Week: ${selectedWeekText}`}</Text>
    {answers.map((ans) => {
      let question = null
      questions.every((q) => {
        if (q.id === ans.qid) question = q
        return question === null
      })
      return (
        <View key={ans.qid}>
          <Text>{question.text}</Text>
          <Text>{ans.answer ? 'Yes' : 'No'}</Text>
        </View>
      )
    })}
    <Button title="Done" onPress={onDone} />
  </View>
)

ClaimReport.propTypes = {
  selectedWeekText: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      qid: PropTypes.number.isRequired,
      answer: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onDone: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  selectedWeekText: getSelectedWeekText(state),
  questions: state.claim.questions,
  answers: state.claim.answers,
})
const mapDispatchToProps = (dispatch) => ({
  onDone: () => dispatch(restartClaim()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ClaimReport)
