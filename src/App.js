import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Provider } from 'react-redux'
import navStack from './lib/NavigationStack'
import { colors } from './assets/Styles'

import NavigationService from './lib/NavigationService'
import configureStore from './redux'

const con = configureStore('testing', () => {})
// con.persistor.purge()
const { store } = con

const RootStack = createStackNavigator(navStack,
{
  initialRouteName: 'Welcome',
})

const Navigation = createAppContainer(RootStack)

// Render the app container component with the provider around it
const App = () => (
  <Provider store={store}>
    <Navigation
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef)
      }}
      style={{ flex: 1 }}
    />
  </Provider>
)

export default App
