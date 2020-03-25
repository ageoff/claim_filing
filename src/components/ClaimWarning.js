import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { headers } from '../assets/Styles'
import { getSelectedWeekText } from '../selectors/claim'
import { setAcceptedWarning } from '../redux/claim'

const ClaimWarning = ({ selectedWeekText, accept }) => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
    <View>
      <View style={{ height: 5 }} />
      <Text style={headers.text}>{`You are filiing a claim for the week ending on ${selectedWeekText}. If this is not the correct week, click on the Back button to return to the previous page to select another week.`}</Text>
      <View style={{ height: 5 }} />
      <Text style={headers.text}>
        {'Answer the following questions truthfully. Giving false information or answering questions fo anyone other than yourself constitues fraud and is punishable by law.'}
      </Text>
      <View style={{ height: 5 }} />
      <Text style={headers.text}>
        {'If you work during any week claimed, even if you will receive the pay at a later date, you must report your fross earnings, before deductions, for the week in which you performed the work. This includes any pay received as a reservist or member of the National Guard for weekend drill and annual training participation.'}
      </Text>
    </View>
    <Button title="Accept" onPress={() => accept(true)} />
  </View>
)
ClaimWarning.propTypes = {
  selectedWeekText: PropTypes.string.isRequired,
  accept: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  selectedWeekText: getSelectedWeekText(state),
})
const mapDispatchToProps = (dispatch) => ({
  accept: (bool) => dispatch(setAcceptedWarning(bool)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ClaimWarning)
