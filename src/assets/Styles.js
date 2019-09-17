import { StyleSheet } from 'react-native'

export const colors = {
  mainBlue: '#036080',
  mainYellow: '#FCB31C',
  backgroundGrey: '#424244',
  darkGrey: '#5A5A5A',
  lightGrey: '#6e6e70',
}

export const headers = StyleSheet.create({
  h1: {
    color: colors.mainBlue,
    fontSize: 24,
    fontWeight: '600',
    marginTop: 8,
    paddingLeft: 5,
  },
  headerBorder: {
    borderBottomWidth: 4,
    borderBottomColor: colors.mainYellow,
  },
  h2: {
    color: colors.mainBlue,
    borderBottomWidth: 4,
    borderBottomColor: colors.mainYellow,
    fontSize: 20,
    fontWeight: '600',
    marginTop: 8,
  },
  h3: {
    color: colors.mainBlue,
    borderBottomWidth: 4,
    borderBottomColor: colors.mainYellow,
    fontSize: 18,
    fontWeight: '600',
  },
  text: {
    color: colors.darkGrey,
    fontSize: 18,
    fontWeight: 'normal',
  },
})

export const containers = StyleSheet.create({
  main: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  content: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
})
