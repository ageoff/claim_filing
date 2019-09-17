import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SafeAreaView, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { login } from '../redux/user'

class Login extends React.Component {
  render = () => (
    <SafeAreaView>
      <View>
        <Text h2>Home</Text>

      </View>
    </SafeAreaView>
  )
}

Login.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
