import { View, Text, TextInput, TouchableOpacity, ViewStyle, TextStyle, TextInputProps } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import Animated, { FadeInDown, FadeInUp, FadeOutDown, FadeOutUp } from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "~/constants/styles";

type Props = {
  label?: string;
  leftIcon?: React.ReactNode | undefined;
  rightIcon?: React.ReactNode | undefined;
  isSecureTextEntry?: boolean;
  setIsSecureTextEntry?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  onChange?: (text: string) => void;
  handleLeftIconPress?: () => void | undefined;
  handleRightIconPress?: () => void | undefined;
  onFocusHandler?: () => void | undefined;
  onBlurHandler?: () => void | undefined;
  style?: ViewStyle;
  styleInput?: TextStyle;
  error?: string;
  placeholder?: string;
  inputWrapperStyles?: ViewStyle;
  inputRef?: any;
  height?: number;
  placeholderColor?: string;
  value?: string;
  props?: TextInputProps
}

const Input = ({
  label,
  leftIcon,
  rightIcon,
  isSecureTextEntry,
  setIsSecureTextEntry,
  handleLeftIconPress,
  handleRightIconPress,
  onFocusHandler,
  onBlurHandler,
  onChange,
  style,
  styleInput,
  error,
  placeholder,
  inputWrapperStyles,
  inputRef,
  height = 56,
  placeholderColor,
  value,
  ...props
}: Props) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus((prev) => !prev);
    onFocusHandler && onFocusHandler();
  };

  const handleBlur = () => {
    setFocus((prev) => !prev);
    onBlurHandler && onBlurHandler();
  };
  return (
    <View style={[{ marginVertical: 12 },style]}>
      { label && <Text style={styles.label}>{label}</Text>}
      <View className = "shadow-md" style={[styles.inputWrapper(focus, error), inputWrapperStyles]}>
        { leftIcon && <TouchableOpacity onPress={handleLeftIconPress}>{leftIcon}</TouchableOpacity> }
        <TextInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          style={[styles.input, styleInput]}
          onChangeText={onChange}
          secureTextEntry={isSecureTextEntry}
          placeholderTextColor={placeholderColor ?? '#7B7B8B'}
          cursorColor={COLORS.primary}
          value={value}
          ref={inputRef}
          {...props?.props}
        />
        {rightIcon && <TouchableOpacity onPress={handleRightIconPress} >{rightIcon}</TouchableOpacity> }
      </View>
      {error && (
        <Animated.View
          style={styles.errorContainer}
          entering={FadeInDown}
          exiting={FadeOutDown}
        >
          <Feather name="alert-triangle" size={18} color={'#e03901'} />
          <Text style={styles.errorTxt}>{error}</Text>
        </Animated.View>
      )}
    </View>
  );
};

export default Input;
