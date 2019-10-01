import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SafeAreaView, View } from 'react-native'
import { Text } from 'react-native-elements'
import { containers, headers } from '../assets/Styles'

class ContactUs extends React.Component {

  render = () => (
    <SafeAreaView style={containers.main}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={headers.headerBorder}>
          <Text style={headers.h1}>Contact Us</Text>
        </View>
        <View style={containers.content}>
        </View>
      </View>
    </SafeAreaView>
  )
}

ContactUs.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs)
