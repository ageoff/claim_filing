import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListItem } from 'react-native-elements'
import { setSelectedWeekId } from '../redux/claim'

const WeekSelector = ({ weeks, onSelect }) => (
  weeks.map((week) => (
    <ListItem
      key={week.id}
      title={week.text}
      onPress={() => onSelect(week.id)}
      bottomDivider
      chevron
    />
  ))
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
