import React from 'react'
import { connect } from 'react-redux'
import { SafeAreaView, Text } from 'react-native'

export const App = () => (
  <SafeAreaView>
    <Text>
      {'Loading'}
    </Text>
  </SafeAreaView>
)

App.propTypes = {
}
const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)
