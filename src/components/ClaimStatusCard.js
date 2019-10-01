import React from 'react'
import PropTypes from 'prop-types'
import { Text, Card } from 'react-native-elements'
import { headers, colors } from '../assets/Styles'

const ClaimStatusCard = ({ claimWeek, status }) => (
  <Card
    title={`Week: ${claimWeek}`}
    titleStyle={{ color: colors.mainBlue }}
  >
    <Text style={headers.label}>
      {'Status: '}
      <Text style={headers.text}>
        {status}
      </Text>
    </Text>
  </Card>
)

ClaimStatusCard.propTypes = {
  id: PropTypes.number.isRequired,
  claimWeek: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

export default ClaimStatusCard
