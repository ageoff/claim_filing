import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SafeAreaView, View } from 'react-native'
import { Text } from 'react-native-elements'

class ViewUIBalance extends React.Component {

  render = () => (
    <SafeAreaView>
      <View>
        <Text h2>View UI Balance</Text>
      </View>
    </SafeAreaView>
  )
}

ViewUIBalance.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewUIBalance)
