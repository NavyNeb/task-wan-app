import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Insets = () => {
    const { top } = useSafeAreaInsets()
  return {
    top
  }
}

export default Insets