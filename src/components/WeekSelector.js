import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import { setSelectedWeekId } from '../redux/claim'
import { headers, colors } from '../assets/Styles'

const WeekSelector = ({ weeks, onSelect }) => (
  <View>
    <Text style={headers.text}>{'File your weekly claim for unemployment benefits by choosing the appropriate week below. If the weekly claim you wish to file is not listed, you will need to contact the unemployment Contact Center for information and assistance with your claim.'}</Text>
    <Text style={headers.h2}>Select From Available Weeks</Text>
    {weeks.map((week) => (
      <ListItem
        key={week.id}
        title={week.text}
        titleStyle={headers.text}
        onPress={() => onSelect(week.id)}
        containerStyle={{ borderBottomWidth: 1, borderBottomColor: colors.darkGrey, backgroundColor: colors.mainBackground }}
        chevron={{ color: colors.darkGrey }}
      />
    ))}
  </View>
)

WeekSelector.propTypes = {
  weeks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  weeks: state.claim.availableWeeks,
})
const mapDispatchToProps = (dispatch) => ({
  onSelect: (id) => dispatch(setSelectedWeekId(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(WeekSelector)
