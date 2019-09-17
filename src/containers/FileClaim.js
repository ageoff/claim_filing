import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SafeAreaView, View } from 'react-native'
import { Text } from 'react-native-elements'

import WeekSelector from '../components/WeekSelector'
import ClaimQuestion from '../components/ClaimQuestion'
import ClaimReport from '../components/ClaimReport'

const getContent = (selectedWeekId, complete) => {
  if (complete) return <ClaimReport />
  if (selectedWeekId === 0) return <WeekSelector />
  return <ClaimQuestion />
}

const FileClaim = ({ selectedWeekId, complete }) => (
  <SafeAreaView>
    <View>
      <Text h2>File A Claim</Text>
      {getContent(selectedWeekId, complete)}
    </View>
  </SafeAreaView>
)

FileClaim.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  selectedWeekId: PropTypes.number.isRequired,
  complete: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  availableWeeks: state.claim.availableWeeks,
  selectedWeekId: state.claim.selectedWeekId,
  questions: state.claim.questions,
  currentQuestion: state.claim.currentQuestion,
  complete: state.claim.complete,
  answers: state.claim.answers,
})
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(FileClaim)
