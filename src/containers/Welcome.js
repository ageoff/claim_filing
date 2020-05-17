import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SafeAreaView, View } from 'react-native'
import { Text } from 'react-native-elements'

class Welcome extends React.Component {
  componentDidMount = () => {
    const { loggedIn, navigation } = this.props
    console.log(loggedIn)
    if (!loggedIn) navigation.replace('PinLogin')
    else navigation.replace('Home')
  }

  render = () => (
    <SafeAreaView>
      <View>
        <Text h2>Welcome... Loading</Text>
      </View>
    </SafeAreaView>
  )
}

Welcome.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
