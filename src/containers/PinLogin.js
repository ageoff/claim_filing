import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView, View, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon5 from 'react-native-vector-icons/FontAwesome5'
import { doPinLogin } from '../redux/user'

import { containers, headers, colors } from '../assets/Styles'


import logo from '../assets/images/KDOL_Header_Desktop_Logo.png'

const styles = StyleSheet.create({
  pinPad: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  pinPadRow: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  pinPadButton: {
    height: 50,
    width: 50,
    margin: 30,
    color: colors.mainBlue,
    fontSize: 24,
    lineHeight: 44,
    fontWeight: '600',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: colors.mainYellow,
    borderRadius: 25,
  },
  pinPadDelete: {
    height: 50,
    width: 50,
    margin: 30,
    color: colors.mainBlue,
    fontSize: 44,
    lineHeight: 44,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinPlaceholder: {
    width: 40,
    margin: 20,
    color: colors.mainBlue,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
})

const PinPad = ({ press }) => (
  <View style={styles.pinPad}>
    <View style={styles.pinPadRow}>
      <TouchableOpacity onPress={() => press(1)}>
        <Text style={styles.pinPadButton}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => press(2)}>
        <Text style={styles.pinPadButton}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => press(3)}>
        <Text style={styles.pinPadButton}>3</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.pinPadRow}>
      <TouchableOpacity onPress={() => press(4)}>
        <Text style={styles.pinPadButton}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => press(5)}>
        <Text style={styles.pinPadButton}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => press(6)}>
        <Text style={styles.pinPadButton}>6</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.pinPadRow}>
      <TouchableOpacity onPress={() => press(7)}>
        <Text style={styles.pinPadButton}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => press(8)}>
        <Text style={styles.pinPadButton}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => press(9)}>
        <Text style={styles.pinPadButton}>9</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.pinPadRow}>
      <TouchableOpacity onPress={() => press(-1)}>
        <Text style={styles.pinPadDelete}><Icon5 size={24} style={{height: 50, width: 50}} name="backspace" /></Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => press(0)}>
        <Text style={styles.pinPadButton}>0</Text>
      </TouchableOpacity>
      <Text style={styles.pinPadDelete} />
    </View>
  </View>
)

PinPad.propTypes = {
  press: PropTypes.func.isRequired,
}

export const PinLogin = () => {
  const dispatch = useDispatch()
  const [pin, setPin] = useState([null, null, null, null])
  const loginStatus = useSelector((state) => state.user.loginStatus)
  const loginLoading = useSelector((state) => state.user.loginLoading)
  const username = useSelector((state) => state.user.username)
  const ref = useRef()
  const addPinVal = (val) => {
    const temp = [...pin]
    const index = temp.findIndex((v) => (v == null))
    if (index < 0) return
    temp[index] = val
    setPin(temp)
    if (temp.findIndex((v) => v == null) < 0) dispatch(doPinLogin(temp))
  }
  const removePinVal = () => {
    if (pin[0] == null) return
    const index = pin.findIndex((v) => (v == null))
    const temp = [...pin]
    if (index > 0) temp[index - 1] = null
    setPin(temp)
  }
  const handlePinPress = (val) => {
    if (val < 0) removePinVal()
    else addPinVal(val)
  }
  useEffect(() => {
    if (ref.loginStatus !== loginStatus) setPin([null, null, null, null])
  }, [loginStatus])
  return (
    <SafeAreaView style={containers.main}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ padding: 20, justifyContent: 'center', alignItems: 'flex-start' }}>
          <Image source={logo} />
        </View>
        <Text style={[headers.h1, {
          textAlign: 'center', marginLeft: 20, marginTop: 10, marginBottom: 10,
        }]}
        >
          {`Welcome back\n${username}`}
        </Text>
        {loginStatus !== '' && <View style={{ paddingHorizontal: 20, textAlign: 'center' }}><Text style={headers.errorText}>{loginStatus}</Text></View>}
        <View style={styles.pinPadRow}>
          <Text style={styles.pinPlaceholder}><Icon size={24} name={pin[0] == null ? 'circle-o' : 'circle'} /></Text>
          <Text style={styles.pinPlaceholder}><Icon size={24} name={pin[1] == null ? 'circle-o' : 'circle'} /></Text>
          <Text style={styles.pinPlaceholder}><Icon size={24} name={pin[2] == null ? 'circle-o' : 'circle'} /></Text>
          <Text style={styles.pinPlaceholder}><Icon size={24} name={pin[3] == null ? 'circle-o' : 'circle'} /></Text>
        </View>
        {!loginLoading && <PinPad press={handlePinPress} />}
        {loginLoading && <ActivityIndicator />}
      </View>
    </SafeAreaView>
  )
}

PinLogin.navigationOptions = {
  header: () => null,
}

export default PinLogin
