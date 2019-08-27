import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'

export default ({ componentId }) => (
  <SafeAreaView>
    <TouchableOpacity onPress={() => Navigation.push(componentId, {
      component: { name: 'login' },
    })}
    >
      <Text>
        {'No Thanks'}
      </Text>
    </TouchableOpacity>
  </SafeAreaView>
)
