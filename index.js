/**
 * @format
 */
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import App from './src/App'
import Login from './src/containers/Login'

import configureStore from './src/redux'

const con = configureStore('testing')
con.persistor.purge()
const { store } = con

// AppRegistry.registerComponent(appName, () => App)
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.registerComponentWithRedux('welcome', () => App, Provider, store)
  Navigation.registerComponentWithRedux('login', () => Login, Provider, store)
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            id: 'screen.welcome',
            name: 'welcome',
          },
        },
        ],
        options: {},
      },
    },
  })
})
