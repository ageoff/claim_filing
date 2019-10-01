import { NavigationActions, StackActions } from 'react-navigation'

let navigator

const setTopLevelNavigator = (navigatorRef) => {
  navigator = navigatorRef
}

const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  )
}

const replace = (routeName, params) => {
  navigator.dispatch(
    StackActions.replace({
      routeName,
      params,
    }),
  )
}

const goHome = () => {
  navigator.dispatch(StackActions.popToTop())
}

// add other navigation functions that you need and export them

export default {
  navigate,
  replace,
  goHome,
  setTopLevelNavigator,
}
