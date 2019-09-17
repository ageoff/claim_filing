import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SafeAreaView, View } from 'react-native'
import { Text } from 'react-native-elements'

class PrivacyPolicy extends React.Component {

  render = () => (
    <SafeAreaView>
      <View>
        <Text h2>Privacy Policy</Text>
      </View>
    </SafeAreaView>
  )
}

PrivacyPolicy.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicy)
