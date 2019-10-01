import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SafeAreaView, View, ActivityIndicator } from 'react-native'
import { Text, PricingCard } from 'react-native-elements'
import { containers, headers, colors } from '../assets/Styles'
import { loadBalance } from '../redux/balance'

class ViewUIBalance extends React.Component {
  componentWillMount = () => {
    const { loadUIBalance } = this.props
    loadUIBalance()
  }

  getContent = () => {
    const { loading, balance, loadUIBalance, lastUpdated } = this.props
    if (loading) {
      return (
        <View>
          <ActivityIndicator size="large" color={colors.mainBlue} />
        </View>
      )
    }
    return (
      <PricingCard
        title="UI Balance"
        price={this.currencyFormat(balance)}
        info={['Balance as of', lastUpdated]}
        button={{ title: 'Reload', icon: 'refresh' }}
        onButtonPress={loadUIBalance}
      />
    )
  }

  currencyFormat = (num) => `$${num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`

  render = () => (
    <SafeAreaView style={containers.main}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={headers.headerBorder}>
          <Text style={headers.h1}>View UI Balance</Text>
        </View>
        <View style={containers.content}>
          {this.getContent()}
        </View>
      </View>
    </SafeAreaView>
  )
}

ViewUIBalance.propTypes = {
  balance: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  loadUIBalance: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  balance: state.balance.balance,
  loading: state.balance.loading,
  lastUpdated: state.balance.lastUpdated,
})

const mapDispatchToProps = (dispatch) => ({
  loadUIBalance: () => dispatch(loadBalance()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewUIBalance)
