import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SafeAreaView, View } from 'react-native'
import { Text, Button, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon5 from 'react-native-vector-icons/FontAwesome5'
import IconE from 'react-native-vector-icons/Entypo'
import { logout } from '../redux/user'

const actions = [
  {
    title: 'File Claim',
    nav: 'FileClaim',
    icon: <Icon
      name="file-text"
      size={15}
      color="black"
    />,
  },
  {
    title: 'View Claim Status',
    nav: 'ViewClaimStatus',
    icon: <Icon
      name="info"
      size={15}
      color="black"
    />,
  },
  {
    title: 'View UI Balance',
    nav: 'ViewUIBalance',
    icon: <Icon
      name="dollar"
      size={15}
      color="black"
    />,
  },
  {
    title: 'Contact Us',
    nav: 'ContactUs',
    icon: <Icon5
      name="mail-bulk"
      size={15}
      color="black"
    />,
  },
  {
    title: 'About Us',
    nav: 'AboutUs',
    icon: <IconE
      name="text"
      size={15}
      color="black"
    />,
  },
  {
    title: 'Privacy Policy',
    nav: 'PrivacyPolicy',
    icon: <IconE
      name="text"
      size={15}
      color="black"
    />,
  },
]

class Home extends React.Component {
  render = () => {
    const { navigation } = this.props
    return (
    <SafeAreaView>
      <View>
        <Text h2>Home</Text>
        {actions.map((action, i) => (
          <ListItem
            key={i}
            title={action.title}
            leftIcon={action.icon}
            onPress={()=>navigation.navigate(action.nav)}
            bottomDivider
            chevron />
        ))}
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
