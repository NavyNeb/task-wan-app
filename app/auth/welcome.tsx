import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Insets from '~/components/Insets'

type Props = {}

const Welcome = (props: Props) => {
  return (
    <View className = "flex-1 bg-emerald-500" >
      <Text>Welcome</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})