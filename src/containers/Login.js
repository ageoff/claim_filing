import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SafeAreaView, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { login } from '../redux/user'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.inputs = {}
  }

  render = () => {
    const { email, password } = this.state
    const { loginLoading, loginStatus, handleLogin } = this.props
    return (
      <SafeAreaView>
        <View>
          <Text h2>Login</Text>
          {loginStatus !== '' && <Text h4>{loginStatus}</Text>}
          <Input
            testID="LoginEmail"
            ref={(input) => {
              this.inputs.email = input
            }}
            leftIcon={(
              <Icon
                name="envelope"
                size={18}
                color="black"
                style={{ paddingRight: 10 }}
              />
            )}
            value={email}
            editable
            keyboardType="email-address"
            autoCorrect={false}
            autoComplete={false}
            autoCapitalize="none"
            returnKeyType="next"
            onChangeText={(text) => this.setState({ email: text })}
            underlineColorAndroid="transparent"
            onSubmitEditing={() => this.inputs.password.focus()}
            placeholder="Email"
            blurOnSubmit={false}
          />

          <Input
            testID="LoginPassword"
            ref={(input) => {
              this.inputs.password = input
            }}
            leftIcon={(
              <Icon
                name="key"
                size={18}
                color="black"
                style={{ paddingRight: 10 }}
              />
            )}
            value={password}
            editable
            keyboardType="default"
            returnKeyType="go"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(pass) => this.setState({ password: pass })}
            underlineColorAndroid="transparent"
            onSubmitEditing={() => handleLogin(email, password)}
            placeholder="Password"
          />
          <Button title="Login" loading={loginLoading} onPress={() => handleLogin(email, password)} />
        </View>
      </SafeAreaView>
    )
  }
}

Login.propTypes = {
  loginStatus: PropTypes.string.isRequired,
  loginLoading: PropTypes.bool.isRequired,
  // Functions
  handleLogin: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  loginStatus: state.user.loginStatus,
  loginLoading: state.user.loginLoading,
})

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (email, password) => (dispatch(login(email, password))),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
