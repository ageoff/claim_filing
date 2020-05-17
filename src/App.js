import React from 'react'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Image, TouchableOpacity } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Provider } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import navStack from './lib/NavigationStack'
import { colors } from './assets/Styles'
import headerLogo from './assets/images/KDOL_Footer_Logo.png'

import NavigationService from './lib/NavigationService'
import configureStore from './redux'
import { setLoginStatus, setLoginLoading, setLoggedIn } from './redux/user'

const con = configureStore('testing', () => {})
// con.persistor.purge()
const { store, persistor } = con

const RootStack = createStackNavigator(navStack,
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      headerTintColor: colors.mainBackground,
      headerStyle: {
        backgroundColor: colors.mainBlue,
      },
      headerTitle: () => <Image source={headerLogo} />,
      headerRight: () => (
        <TouchableOpacity onPress={NavigationService.goHome}>
          <Icon
            name="home"
            size={30}
            color={colors.mainBackground}
            style={{ paddingRight: 10 }}
          />
        </TouchableOpacity>
      ),
    },
  })

const Navigation = createAppContainer(RootStack)

const onBeforeLift = () => {
  console.log('OMOMOMOMOMOMOM')
  store.dispatch(setLoggedIn(false))
  store.dispatch(setLoginStatus(''))
  store.dispatch(setLoginLoading(false))
}

// Render the app container component with the provider around it
const App = () => (
  <Provider store={store}>
    <PersistGate onBeforeLift={onBeforeLift} persistor={persistor}>
      <Navigation
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
        style={{ flex: 1 }}
      />
    </PersistGate>
  </Provider>
)

export default App
