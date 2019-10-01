import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SafeAreaView, View, ActivityIndicator } from 'react-native'
import { Text } from 'react-native-elements'
import { loadClaimStatus } from '../redux/claimstatus'
import { containers, headers, colors } from '../assets/Styles'
import ClaimStatusCard from '../components/ClaimStatusCard'

class ViewClaimStatus extends React.Component {
  componentWillMount = () => {
    const { loadStatus } = this.props
    loadStatus()
  }

  getContent = () => {
    const { loading, claims } = this.props
    if (loading) {
      return (
        <View>
          <ActivityIndicator size="large" color={colors.mainBlue} />
        </View>
      )
    }
    return claims.map((claim) => (
      <ClaimStatusCard
        id={claim.id}
        claimWeek={claim.claim_week}
        status={claim.status}
      />
    ))
  }

  render = () => (
    <SafeAreaView style={containers.main}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={headers.headerBorder}>
          <Text style={headers.h1}>View Claim Status</Text>
        </View>
        <View style={containers.content}>
          {this.getContent()}
        </View>
      </View>
    </SafeAreaView>
  )
}

ViewClaimStatus.propTypes = {
  claims: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  selectedClaim: PropTypes.object.isRequired,
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  loadStatus: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  claims: state.claimstatus.claims,
  loading: state.claimstatus.loading,
  selectedClaim: state.claimstatus.selectedClaim,
})

const mapDispatchToProps = (dispatch) => ({
  loadStatus: () => dispatch(loadClaimStatus()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewClaimStatus)
