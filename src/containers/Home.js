import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SafeAreaView, View } from 'react-native'
import { Text, Button, ListItem, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon5 from 'react-native-vector-icons/FontAwesome5'
import IconE from 'react-native-vector-icons/Entypo'
import { logout } from '../redux/user'
import { containers, headers, colors } from '../assets/Styles'

const actions = [
  {
    title: 'File Claim',
    nav: 'FileClaim',
    icon: <Icon
      name="file-text"
      size={15}
      color={colors.mainBlue}
    />,
  },
  {
    title: 'View Claim Status',
    nav: 'ViewClaimStatus',
    icon: <Icon
      name="info"
      size={15}
      color={colors.mainBlue}
    />,
  },
  {
    title: 'View UI Balance',
    nav: 'ViewUIBalance',
    icon: <Icon
      name="dollar"
      size={15}
      color={colors.mainBlue}
    />,
  },
  {
    title: 'Contact Us',
    nav: 'ContactUs',
    icon: <Icon5
      name="mail-bulk"
      size={15}
      color={colors.mainBlue}
    />,
  },
  {
    title: 'About Us',
    nav: 'AboutUs',
    icon: <IconE
      name="text"
      size={15}
      color={colors.mainBlue}
    />,
  },
  {
    title: 'Privacy Policy',
    nav: 'PrivacyPolicy',
    icon: <IconE
      name="text"
      size={15}
      color={colors.mainBlue}
    />,
  },
]

class Home extends React.Component {
  render = () => {
    const { navigation } = this.props
    return (
    <SafeAreaView style={containers.main}>
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
        <View>
        <View style={headers.headerBorder}>
          <Text style={headers.h1}>Home</Text>
        </View>
        {actions.map((action, i) => (
          <ListItem
            key={i}
            title={action.title}
            titleStyle={headers.h2}
            leftIcon={action.icon}
            onPress={()=>navigation.navigate(action.nav)}
            containerStyle={{ borderBottomColor: colors.mainYellow, borderBottomWidth: 1 }}
            chevron={{ color: colors.mainBlue }} />
        ))}
      </View>
      <Button
        title="Logout"
        icon={(
          <Icon
            name="sign-out"
            size={15}
            color="white"
            style={{ paddingRight: 10 }}
          />
        )}
        onPress={this.props.doLogout}
      />
      </View>
  </SafeAreaView>
  )
}
}

Home.propTypes = {
  doLogout: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  doLogout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
