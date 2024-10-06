import { ActivityIndicator, StyleSheet, ViewStyle, TextStyle, Pressable, Text } from 'react-native'
import React from 'react'
import { COLORS } from '~/constants/styles'

type Props = {
  title: string,
  onPress?: ()=>void,
  icon?: React.ReactNode,
  btnStyle?: ViewStyle,
  txtStyle?: TextStyle,
  disabled?: boolean,
  loading?: boolean
}

const Button = ({ title, onPress, icon, btnStyle, txtStyle, loading, disabled }: Props) => {
  return (
    <Pressable disabled={loading || disabled} onPress={onPress} style={[styles.btnContainer, btnStyle, { opacity: disabled ? .5 : 1 }]} >
      { icon && icon }
      <Text  style={[styles.btnTxt, txtStyle]} >{title}</Text>
      {loading && <ActivityIndicator color={"#FFF" } size={"small"} />}
    </Pressable>
  )
}

export default Button;

const styles = StyleSheet.create({
  btnContainer:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 55,
      borderColor: "transparent",
      borderWidth: 0,
      marginVertical: 8,
      backgroundColor: COLORS.primary,
      borderRadius: 8,
  },

  btnTxt: {
      textAlign: 'center',
      color: COLORS.white,
      marginRight: 6
  }
})
