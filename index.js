/**
 * @format
 */
import { Navigation } from 'react-native-navigation'
import App from './src/App'
import Login from './src/containers/Login'

// AppRegistry.registerComponent(appName, () => App)
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.registerComponent('welcome', () => App)
  Navigation.registerComponent('login', () => Login)
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
