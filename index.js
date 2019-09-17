/**
 * @format
 */
// import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import App from './src/App'

// import configureStore from './src/redux'

// const con = configureStore('testing', () => {
// const { store } = con
// const { username } = store.getState().user
// console.log(username)
// if (username !== '') {
//   console.log('WE ARE CHAGING THE ROOT')
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [{
//           component: {
//             id: 'screen.login',
//             name: 'login',
//           },
//         }],
//         options: {},
//       },
//     },
//   })
// }
// })
// con.persistor.purge()
// const { store } = con

AppRegistry.registerComponent('ClaimFiling', () => App)
