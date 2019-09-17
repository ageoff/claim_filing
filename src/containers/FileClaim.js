import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SafeAreaView, View } from 'react-native'
import { Text } from 'react-native-elements'
import { headers, containers } from '../assets/Styles'

import WeekSelector from '../components/WeekSelector'
import ClaimQuestion from '../components/ClaimQuestion'
import ClaimReport from '../components/ClaimReport'
import ClaimWarning from '../components/ClaimWarning'

const getContent = (selectedWeekId, complete, acceptedWarning) => {
  if (complete) return <ClaimReport />
  if (selectedWeekId === 0) return <WeekSelector />
  if (!acceptedWarning) return <ClaimWarning />
  return <ClaimQuestion />
}

const FileClaim = ({ selectedWeekId, complete, acceptedWarning }) => (
  <SafeAreaView style={containers.main}>
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={headers.headerBorder}>
        <Text style={headers.h1}>File A Claim</Text>
      </View>
      <View style={containers.content}>
        {getContent(selectedWeekId, complete, acceptedWarning)}
      </View>
    </View>
  </SafeAreaView>
)

FileClaim.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  selectedWeekId: PropTypes.number.isRequired,
  complete: PropTypes.bool.isRequired,
  acceptedWarning: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  selectedWeekId: state.claim.selectedWeekId,
  complete: state.claim.complete,
  acceptedWarning: state.claim.acceptedWarning,
})
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(FileClaim)
