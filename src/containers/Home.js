import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SafeAreaView, View, Image } from 'react-native'
import {
  Text, Button, ListItem,
} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon5 from 'react-native-vector-icons/FontAwesome5'
import IconE from 'react-native-vector-icons/Entypo'
import { logout } from '../redux/user'
import { containers, headers, colors } from '../assets/Styles'
import mainLogo from '../assets/images/KDOL_Header_Desktop_Logo.png'

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

const Home = ({ navigation, doLogout }) => (
  <SafeAreaView style={containers.main}>
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
      <View>
        {actions.map((action) => (
          <ListItem
            key={action.title}
            title={action.title}
            titleStyle={headers.h2}
            leftIcon={action.icon}
            onPress={() => navigation.navigate(action.nav)}
            containerStyle={{
              borderBottomColor: colors.mainBlue,
              borderBottomWidth: 1,
              backgroundColor: colors.mainBackground,
            }}
            chevron={{ color: colors.mainBlue }}
          />
        ))}
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={mainLogo} />
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
        onPress={doLogout}
      />
    </View>
  </SafeAreaView>
)

Home.navigationOptions = {
  title: 'Home',
  headerTitle: () => null,
  headerRight: () => null,
}

Home.propTypes = {
  doLogout: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  doLogout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
