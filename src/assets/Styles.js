import { StyleSheet } from 'react-native'

export const colors = {
  mainBlue: '#036080',
  mainYellow: '#FCB31C',
  backgroundGrey: '#424244',
  darkGrey: '#5A5A5A',
  lightGrey: '#6e6e70',
  mainBackground: '#f1f1ea',
  errorRed: '#D8000C',
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
  label: {
    color: colors.mainBlue,
    fontSize: 18,
    fontWeight: '500',
  },
  text: {
    color: colors.darkGrey,
    fontSize: 18,
    fontWeight: 'normal',
  },
  errorText: {
    color: colors.errorRed,
    fontSize: 18,
    fontWeight: 'normal',
  },
  questionLabel: {
    color: colors.mainBlue,
    borderBottomWidth: 4,
    borderBottomColor: colors.mainYellow,
    fontSize: 28,
    fontWeight: '600',
    marginTop: 8,
  },
  questionText: {
    color: colors.darkGrey,
    fontSize: 28,
    fontWeight: '600',
    padding: 20,
  },
})

export const containers = StyleSheet.create({
  main: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: colors.mainBackground,
  },
  content: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
})
