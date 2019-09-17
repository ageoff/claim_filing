import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Provider } from 'react-redux'
import Welcome from './containers/Welcome'
import Login from './containers/Login'
import Home from './containers/Home'

import NavigationService from './lib/NavigationService'
import configureStore from './redux'

const con = configureStore('testing', () => {})
// con.persistor.purge()
const { store } = con

const RootStack = createStackNavigator({
  Welcome,
  Login,
  Home,
},
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
    />
  </Provider>
)

export default App
