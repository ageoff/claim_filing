import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, ScrollView } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { restartClaim } from '../redux/claim'
import { getSelectedWeekText } from '../selectors/claim'
import { headers, colors } from '../assets/Styles'

const ClaimReport = ({
  questions, answers, selectedWeekText, onDone,
}) => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text style={headers.h2}>
        {'Week:'}
        <Text style={headers.text}>{selectedWeekText}</Text>
      </Text>
      <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: colors.backgroundGrey }}>
        <View style={{ flex: 1.5 }}><Text style={headers.h3}>Question</Text></View>
        <View style={{ flex: 0.5 }}><Text style={[headers.h3, { textAlign: 'center' }]}>Answer</Text></View>
      </View>
      <ScrollView contentContainerStyle={{ flexDirection: 'column' }}>
        {answers.map((ans) => {
          let question = null
          questions.every((q) => {
            if (q.id === ans.qid) question = q
            return question === null
          })
          return (
            <View
              key={ans.qid}
              style={{
                flexDirection: 'row', borderBottomColor: colors.lightGrey, borderBottomWidth: 1, paddingTop: 5, paddingBottom: 5,
              }}
            >
              <View style={{ flex: 1.5 }}><Text style={headers.text}>{question.text}</Text></View>
              <View style={{ flex: 0.5, justifyContent: 'center' }}>
                <Text style={{
                  fontSize: 18, fontWeight: '600', color: ans.answer ? colors.mainBlue : colors.backgroundGrey, textAlign: 'center',
                }}
                >
                  {ans.answer ? 'Yes' : 'No'}
                </Text>
              </View>
            </View>
          )
        })}
      </ScrollView>
    </View>
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
