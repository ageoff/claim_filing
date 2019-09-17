import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SafeAreaView, View } from 'react-native'
import { Text, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { logout } from '../redux/user'

class Home extends React.Component {
  render = () => (
    <SafeAreaView>
      <View>
        <Text h2>Home</Text>
        <Button
          title="Logout"
          icon={(
            <Icon
              name="sign-out"
              size={15}
              color="white"
              style={{ paddingRight: 10 }}
            />
          )}
          onPress={this.props.doLogout}
        />
      </View>
    </SafeAreaView>
  )
}

Home.propTypes = {
  doLogout: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  doLogout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
