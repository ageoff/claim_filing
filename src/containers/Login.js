import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SafeAreaView, View, Image } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { login } from '../redux/user'
import { containers, headers, colors } from '../assets/Styles'

import logo from '../assets/images/KDOL_Header_Desktop_Logo.png'

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
      <SafeAreaView style={containers.main}>
        <View>
          <View style={{ padding: 20, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={logo} />
          </View>
          <Text style={[headers.h1, { textAlign: 'center', marginLeft: 20, marginTop: 10, marginBottom: 10 }]}>
            {'Welcome to\nUnemployment Benefits'}
          </Text>
          {loginStatus !== '' && <View style={{ padding: 20, textAlign: 'center' }}><Text style={headers.errorText}>{loginStatus}</Text></View>}
          <Input
            testID="LoginEmail"
            ref={(input) => {
              this.inputs.email = input
            }}
            leftIcon={(
              <Icon
                name="envelope"
                size={18}
                color={colors.mainBlue}
                style={{ paddingRight: 10 }}
              />
            )}
            containerStyle={{ marginTop: 10, marginBottom: 10, paddingLeft: 20, paddingRight: 20 }}
            inputStyle={{ color: colors.backgroundGrey }}
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
                color={colors.mainBlue}
                style={{ paddingRight: 10 }}
              />
            )}
            containerStyle={{ marginTop: 10, marginBottom: 10, paddingLeft: 20, paddingRight: 20 }}
            inputStyle={{ color: colors.backgroundGrey }}
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
          <Button title="Login" loading={loginLoading} onPress={() => handleLogin(email, password)} containerStyle={{ padding: 20 }} />
        </View>
      </SafeAreaView>
    )
  }
}

Login.navigationOptions = {
  header: null,
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
