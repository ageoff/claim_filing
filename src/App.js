import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { setUsername } from './redux/user'

export const App = ({ componentId, username, changeUser }) => (
  <SafeAreaView>
    <TouchableOpacity onPress={() => Navigation.push(componentId, {
      component: { name: 'login' },
    })}
    >
      <Text>
        {`No Thanks ${username}`}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => changeUser('NEWONE')}>
      <Text>
        {'Set the username'}
      </Text>
    </TouchableOpacity>
  </SafeAreaView>
)

App.propTypes = {
  componentId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  // Functions
  changeUser: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  username: state.user.username,
})
const mapDispatchToProps = (dispatch) => ({
  changeUser: (u) => dispatch(setUsername(u)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
