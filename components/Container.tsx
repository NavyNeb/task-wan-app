/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
    ScrollView as DefaultScrollView,
  } from "react-native";
import { COLORS } from "~/constants/styles";
  
  export type ScrollViewProps = DefaultScrollView["props"];
  
  export function Container(props: ScrollViewProps) {
    const { style, children, ...otherProps } = props;
    return (
      <DefaultScrollView
        style={[{ backgroundColor: COLORS.white, paddingHorizontal: 14, flex: 1 }, style]}
        contentContainerStyle={{
          paddingBottom: 40,
          position: 'relative'
        }}
        showsVerticalScrollIndicator={false}
        {...otherProps}
      >
      
            {children}
      </DefaultScrollView>
    );
  }